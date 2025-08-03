import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class AnalyticsService {
  constructor(private readonly prisma: PrismaService) {}

  async getDashboardStats() {
    const [
      totalRevenue,
      totalOrders,
      totalProducts,
      totalCustomers,
      recentOrders,
      topProducts,
    ] = await Promise.all([
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

  private async getTotalRevenue() {
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

  private async getTotalOrders() {
    return this.prisma.order.count();
  }

  private async getTotalProducts() {
    return this.prisma.product.count();
  }

  private async getTotalCustomers() {
    return this.prisma.user.count({
      where: {
        role: 'USER',
      },
    });
  }

  private async getRecentOrders() {
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

  private async getTopProducts() {
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

    const [
      currentWeekRevenue,
      lastWeekRevenue,
      currentMonthRevenue,
      lastMonthRevenue,
    ] = await Promise.all([
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

  private async getRevenueForPeriod(endDate: Date, startDate: Date) {
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

  private calculateGrowth(current: number, previous: number): number {
    if (previous === 0) return current > 0 ? 100 : 0;
    return ((current - previous) / previous) * 100;
  }
} 