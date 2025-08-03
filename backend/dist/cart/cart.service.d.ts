import { PrismaService } from '../prisma/prisma.service';
import { AddToCartDto } from './dto/add-to-cart.dto';
import { UpdateCartDto } from './dto/update-cart.dto';
import { CartResponseDto } from './dto/cart-response.dto';
import { CartItemResponseDto } from './dto/cart-item-response.dto';
export declare class CartService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    addToCart(userId: string, addToCartDto: AddToCartDto): Promise<CartItemResponseDto>;
    getCart(userId: string): Promise<CartResponseDto>;
    updateCartItem(userId: string, cartItemId: string, updateCartDto: UpdateCartDto): Promise<CartItemResponseDto>;
    removeFromCart(userId: string, cartItemId: string): Promise<void>;
    clearCart(userId: string): Promise<void>;
    getCartItemCount(userId: string): Promise<number>;
    private mapToCartItemResponse;
}
