import { CartService } from './cart.service';
import { AddToCartDto } from './dto/add-to-cart.dto';
import { UpdateCartDto } from './dto/update-cart.dto';
import { CartResponseDto } from './dto/cart-response.dto';
import { CartItemResponseDto } from './dto/cart-item-response.dto';
export declare class CartController {
    private readonly cartService;
    constructor(cartService: CartService);
    addToCart(req: any, addToCartDto: AddToCartDto): Promise<CartItemResponseDto>;
    getCart(req: any): Promise<CartResponseDto>;
    updateCartItem(req: any, cartItemId: string, updateCartDto: UpdateCartDto): Promise<CartItemResponseDto>;
    removeFromCart(req: any, cartItemId: string): Promise<void>;
    clearCart(req: any): Promise<void>;
    getCartItemCount(req: any): Promise<{
        count: number;
    }>;
}
