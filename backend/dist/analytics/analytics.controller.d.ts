import { AnalyticsService } from './analytics.service';
export declare class AnalyticsController {
    private readonly analyticsService;
    constructor(analyticsService: AnalyticsService);
    getDashboardStats(): Promise<{
        totalRevenue: number;
        totalOrders: number;
        totalProducts: number;
        totalCustomers: number;
        recentOrders: ({
            user: {
                username: string;
                email: string | null;
            };
            items: ({
                product: {
                    name: string;
                };
            } & {
                id: string;
                name: string;
                price: number;
                orderId: string;
                productId: string;
                quantity: number;
            })[];
        } & {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            status: import(".prisma/client").$Enums.OrderStatus;
            userId: string;
            paymentMethod: string | null;
            shippingAddress: import("@prisma/client/runtime/library").JsonValue | null;
            paymentStatus: import(".prisma/client").$Enums.PaymentStatus;
            orderNumber: string;
            totalAmount: number;
        })[];
        topProducts: {
            productId: string;
            productName: string;
            productPrice: number;
            productImage: string[] | undefined;
            totalSold: number;
        }[];
    }>;
    getRevenueStats(): Promise<{
        currentWeek: number;
        lastWeek: number;
        currentMonth: number;
        lastMonth: number;
        weekGrowth: number;
        monthGrowth: number;
    }>;
}
