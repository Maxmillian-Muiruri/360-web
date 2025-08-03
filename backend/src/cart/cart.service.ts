import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { AddToCartDto } from './dto/add-to-cart.dto';
import { UpdateCartDto } from './dto/update-cart.dto';
import { CartResponseDto } from './dto/cart-response.dto';
import { CartItemResponseDto } from './dto/cart-item-response.dto';

@Injectable()
export class CartService {
  constructor(private readonly prisma: PrismaService) {}

  async addToCart(userId: string, addToCartDto: AddToCartDto): Promise<CartItemResponseDto> {
    const { productId, quantity } = addToCartDto;

    // Check if product exists
    const product = await this.prisma.product.findUnique({
      where: { id: productId },
    });

    if (!product) {
      throw new NotFoundException(`Product with ID ${productId} not found`);
    }

    // Check if item already exists in cart
    const existingCartItem = await this.prisma.cart.findUnique({
      where: {
        userId_productId: {
          userId,
          productId,
        },
      },
      include: {
        product: true,
      },
    });

    if (existingCartItem) {
      // Update quantity
      const updatedCartItem = await this.prisma.cart.update({
        where: { id: existingCartItem.id },
        data: { quantity: existingCartItem.quantity + quantity },
        include: {
          product: true,
        },
      });

      return this.mapToCartItemResponse(updatedCartItem);
    }

    // Create new cart item
    const newCartItem = await this.prisma.cart.create({
      data: {
        userId,
        productId,
        quantity,
      },
      include: {
        product: true,
      },
    });

    return this.mapToCartItemResponse(newCartItem);
  }

  async getCart(userId: string): Promise<CartResponseDto> {
    const cartItems = await this.prisma.cart.findMany({
      where: { userId },
      include: {
        product: true,
      },
      orderBy: { createdAt: 'desc' },
    });

    const items = cartItems.map(item => this.mapToCartItemResponse(item));
    const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = items.reduce((sum, item) => sum + item.totalPrice, 0);

    return {
      items,
      totalItems,
      totalPrice,
      itemCount: items.length,
    };
  }

  async updateCartItem(userId: string, cartItemId: string, updateCartDto: UpdateCartDto): Promise<CartItemResponseDto> {
    const { quantity } = updateCartDto;

    const cartItem = await this.prisma.cart.findFirst({
      where: {
        id: cartItemId,
        userId,
      },
      include: {
        product: true,
      },
    });

    if (!cartItem) {
      throw new NotFoundException(`Cart item with ID ${cartItemId} not found`);
    }

    const updatedCartItem = await this.prisma.cart.update({
      where: { id: cartItemId },
      data: { quantity },
      include: {
        product: true,
      },
    });

    return this.mapToCartItemResponse(updatedCartItem);
  }

  async removeFromCart(userId: string, cartItemId: string): Promise<void> {
    const cartItem = await this.prisma.cart.findFirst({
      where: {
        id: cartItemId,
        userId,
      },
    });

    if (!cartItem) {
      throw new NotFoundException(`Cart item with ID ${cartItemId} not found`);
    }

    await this.prisma.cart.delete({
      where: { id: cartItemId },
    });
  }

  async clearCart(userId: string): Promise<void> {
    await this.prisma.cart.deleteMany({
      where: { userId },
    });
  }

  async getCartItemCount(userId: string): Promise<number> {
    const result = await this.prisma.cart.aggregate({
      where: { userId },
      _sum: {
        quantity: true,
      },
    });

    return result._sum.quantity || 0;
  }

  private mapToCartItemResponse(cartItem: any): CartItemResponseDto {
    return {
      id: cartItem.id,
      productId: cartItem.productId,
      productName: cartItem.product.name,
      productPrice: cartItem.product.price,
      productImage: cartItem.product.image || undefined,
      quantity: cartItem.quantity,
      totalPrice: cartItem.product.price * cartItem.quantity,
      createdAt: cartItem.createdAt,
      updatedAt: cartItem.updatedAt,
    };
  }
} 