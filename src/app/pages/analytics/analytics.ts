import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Chart, registerables } from 'chart.js';
import { AnalyticsService, SellerSummary } from '../../services/analytics';
import { Listing } from '../../services/mock-listings';

Chart.register(...registerables);

@Component({
  imports: [CommonModule],
  selector: 'app-analytics',
  styleUrl: './analytics.scss',
  templateUrl: './analytics.html',
})
export class Analytics implements AfterViewInit, OnDestroy {
  private analyticsService = inject(AnalyticsService);

  summary: SellerSummary = this.analyticsService.getSummary();
  topListings: Listing[] = this.analyticsService.getTopListingsByViews(5);

  @ViewChild('monthlyChart') monthlyChartRef!: ElementRef<HTMLCanvasElement>;
  @ViewChild('categoryChart') categoryChartRef!: ElementRef<HTMLCanvasElement>;

  private charts: Chart[] = [];

  ngAfterViewInit(): void {
    this.renderMonthlyChart();
    this.renderCategoryChart();
  }

  private renderMonthlyChart(): void {
    const trend = this.analyticsService.getMonthlyTrend();
    const chart = new Chart(this.monthlyChartRef.nativeElement, {
      type: 'line',
      data: {
        labels: trend.labels,
        datasets: [
          {
            label: 'Monthly Revenue (EGP)',
            data: trend.revenue,
            borderColor: '#2563eb',
            backgroundColor: 'rgba(37, 99, 235, 0.12)',
            fill: true,
            tension: 0.3,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
      },
    });
    this.charts.push(chart);
  }

  private renderCategoryChart(): void {
    const breakdown = this.analyticsService.getCategoryBreakdown();
    const chart = new Chart(this.categoryChartRef.nativeElement, {
      type: 'bar',
      data: {
        labels: breakdown.labels,
        datasets: [
          {
            label: 'Revenue by Category (EGP)',
            data: breakdown.revenue,
            backgroundColor: ['#2563eb', '#10b981', '#f59e0b', '#8b5cf6', '#ec4899'],
            borderRadius: 6,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
      },
    });
    this.charts.push(chart);
  }

  ngOnDestroy(): void {
    this.charts.forEach((c) => c.destroy());
  }
}