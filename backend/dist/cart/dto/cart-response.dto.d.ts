import { CartItemResponseDto } from './cart-item-response.dto';
export declare class CartResponseDto {
    items: CartItemResponseDto[];
    totalItems: number;
    totalPrice: number;
    itemCount: number;
}
