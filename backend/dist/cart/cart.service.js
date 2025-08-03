"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CartService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let CartService = class CartService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async addToCart(userId, addToCartDto) {
        const { productId, quantity } = addToCartDto;
        const product = await this.prisma.product.findUnique({
            where: { id: productId },
        });
        if (!product) {
            throw new common_1.NotFoundException(`Product with ID ${productId} not found`);
        }
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
            const updatedCartItem = await this.prisma.cart.update({
                where: { id: existingCartItem.id },
                data: { quantity: existingCartItem.quantity + quantity },
                include: {
                    product: true,
                },
            });
            return this.mapToCartItemResponse(updatedCartItem);
        }
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
    async getCart(userId) {
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
    async updateCartItem(userId, cartItemId, updateCartDto) {
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
            throw new common_1.NotFoundException(`Cart item with ID ${cartItemId} not found`);
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
    async removeFromCart(userId, cartItemId) {
        const cartItem = await this.prisma.cart.findFirst({
            where: {
                id: cartItemId,
                userId,
            },
        });
        if (!cartItem) {
            throw new common_1.NotFoundException(`Cart item with ID ${cartItemId} not found`);
        }
        await this.prisma.cart.delete({
            where: { id: cartItemId },
        });
    }
    async clearCart(userId) {
        await this.prisma.cart.deleteMany({
            where: { userId },
        });
    }
    async getCartItemCount(userId) {
        const result = await this.prisma.cart.aggregate({
            where: { userId },
            _sum: {
                quantity: true,
            },
        });
        return result._sum.quantity || 0;
    }
    mapToCartItemResponse(cartItem) {
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
};
exports.CartService = CartService;
exports.CartService = CartService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], CartService);
//# sourceMappingURL=cart.service.js.map