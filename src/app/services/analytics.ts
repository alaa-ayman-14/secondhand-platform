import { Injectable } from '@angular/core';
import { Listing, MOCK_LISTINGS } from './mock-listings';

export interface SellerSummary {
  totalRevenue: number;
  itemsSold: number;
  activeListings: number;
  averageSalePrice: number;
  totalViews: number;
  sellThroughRate: number;
}

export interface CategoryBreakdown {
  labels: string[];
  revenue: number[];
  counts: number[];
}

export interface MonthlyTrend {
  labels: string[];
  revenue: number[];
  itemsSold: number[];
}

@Injectable({
  providedIn: 'root',
})
export class AnalyticsService {
  //we use mock data till DB works
  private listings: Listing[] = MOCK_LISTINGS;

  getAllListings(): Listing[] {
    return this.listings;
  }

  getSummary(): SellerSummary {
    const sold = this.listings.filter((item) => item.status === 'sold');
    const active = this.listings.filter((item) => item.status === 'active');

    const totalRevenue = sold.reduce((sum, item) => sum + item.price, 0);
    const totalViews = this.listings.reduce((sum, item) => sum + item.views, 0);
    const averageSalePrice = sold.length ? Math.round(totalRevenue / sold.length) : 0;
    const sellThroughRate = this.listings.length
      ? Math.round((sold.length / this.listings.length) * 100)
      : 0;

    return {
      totalRevenue,
      itemsSold: sold.length,
      activeListings: active.length,
      averageSalePrice,
      totalViews,
      sellThroughRate,
    };
  }

  getCategoryBreakdown(): CategoryBreakdown {
    const sold = this.listings.filter((item) => item.status === 'sold');
    const revenueMap = new Map<string, number>();
    const countMap = new Map<string, number>();

    for (const item of sold) {
      revenueMap.set(item.category, (revenueMap.get(item.category) ?? 0) + item.price);
      countMap.set(item.category, (countMap.get(item.category) ?? 0) + 1);
    }

    const labels = Array.from(revenueMap.keys());
    return {
      labels,
      revenue: labels.map((cat) => revenueMap.get(cat) ?? 0),
      counts: labels.map((cat) => countMap.get(cat) ?? 0),
    };
  }

  getMonthlyTrend(): MonthlyTrend {
    const sold = this.listings.filter((item) => item.status === 'sold' && item.soldDate);
    const monthMap = new Map<string, { revenue: number; count: number }>();

    for (const item of sold) {
      const month = item.soldDate!.slice(0, 7); //YYYY-MM
      const current = monthMap.get(month) ?? { revenue: 0, count: 0 };
      monthMap.set(month, {
        revenue: current.revenue + item.price,
        count: current.count + 1,
      });
    }

    const labels = Array.from(monthMap.keys()).sort();
    return {
      labels,
      revenue: labels.map((m) => monthMap.get(m)!.revenue),
      itemsSold: labels.map((m) => monthMap.get(m)!.count),
    };
  }

  getTopListingsByViews(limit = 5): Listing[] {
    return [...this.listings].sort((a, b) => b.views - a.views).slice(0, limit);
  }
}