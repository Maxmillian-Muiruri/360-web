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
exports.AnalyticsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let AnalyticsService = class AnalyticsService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async getDashboardStats() {
        const [totalRevenue, totalOrders, totalProducts, totalCustomers, recentOrders, topProducts,] = await Promise.all([
            this.getTotalRevenue(),
            this.getTotalOrders(),
            this.getTotalProducts(),
            this.getTotalCustomers(),
            this.getRecentOrders(),
            this.getTopProducts(),
        ]);
        return {
            totalRevenue,
            totalOrders,
            totalProducts,
            totalCustomers,
            recentOrders,
            topProducts,
        };
    }
    async getTotalRevenue() {
        const result = await this.prisma.order.aggregate({
            where: {
                status: 'COMPLETED',
                paymentStatus: 'COMPLETED',
            },
            _sum: {
                totalAmount: true,
            },
        });
        return result._sum.totalAmount || 0;
    }
    async getTotalOrders() {
        return this.prisma.order.count();
    }
    async getTotalProducts() {
        return this.prisma.product.count();
    }
    async getTotalCustomers() {
        return this.prisma.user.count({
            where: {
                role: 'USER',
            },
        });
    }
    async getRecentOrders() {
        return this.prisma.order.findMany({
            take: 5,
            orderBy: {
                createdAt: 'desc',
            },
            include: {
                user: {
                    select: {
                        username: true,
                        email: true,
                    },
                },
                items: {
                    take: 1,
                    include: {
                        product: {
                            select: {
                                name: true,
                            },
                        },
                    },
                },
            },
        });
    }
    async getTopProducts() {
        const result = await this.prisma.orderItem.groupBy({
            by: ['productId'],
            _sum: {
                quantity: true,
            },
            orderBy: {
                _sum: {
                    quantity: 'desc',
                },
            },
            take: 5,
        });
        const productIds = result.map(item => item.productId);
        const products = await this.prisma.product.findMany({
            where: {
                id: {
                    in: productIds,
                },
            },
            select: {
                id: true,
                name: true,
                price: true,
                images: true,
            },
        });
        return result.map(item => {
            const product = products.find(p => p.id === item.productId);
            return {
                productId: item.productId,
                productName: product?.name || 'Unknown Product',
                productPrice: product?.price || 0,
                productImage: product?.images,
                totalSold: item._sum.quantity || 0,
            };
        });
    }
    async getRevenueStats() {
        const now = new Date();
        const lastWeek = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
        const lastMonth = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);
        const [currentWeekRevenue, lastWeekRevenue, currentMonthRevenue, lastMonthRevenue,] = await Promise.all([
            this.getRevenueForPeriod(now, lastWeek),
            this.getRevenueForPeriod(lastWeek, new Date(lastWeek.getTime() - 7 * 24 * 60 * 60 * 1000)),
            this.getRevenueForPeriod(now, lastMonth),
            this.getRevenueForPeriod(lastMonth, new Date(lastMonth.getTime() - 30 * 24 * 60 * 60 * 1000)),
        ]);
        return {
            currentWeek: currentWeekRevenue,
            lastWeek: lastWeekRevenue,
            currentMonth: currentMonthRevenue,
            lastMonth: lastMonthRevenue,
            weekGrowth: this.calculateGrowth(currentWeekRevenue, lastWeekRevenue),
            monthGrowth: this.calculateGrowth(currentMonthRevenue, lastMonthRevenue),
        };
    }
    async getRevenueForPeriod(endDate, startDate) {
        const result = await this.prisma.order.aggregate({
            where: {
                status: 'COMPLETED',
                paymentStatus: 'COMPLETED',
                createdAt: {
                    gte: startDate,
                    lte: endDate,
                },
            },
            _sum: {
                totalAmount: true,
            },
        });
        return result._sum.totalAmount || 0;
    }
    calculateGrowth(current, previous) {
        if (previous === 0)
            return current > 0 ? 100 : 0;
        return ((current - previous) / previous) * 100;
    }
};
exports.AnalyticsService = AnalyticsService;
exports.AnalyticsService = AnalyticsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], AnalyticsService);
//# sourceMappingURL=analytics.service.js.map