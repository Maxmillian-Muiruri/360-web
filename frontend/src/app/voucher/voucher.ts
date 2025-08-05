import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ToastService } from '../services/toast.service';

interface VoucherData {
  id: string;
  code: string;
  discount: number;
  discountType: 'percentage' | 'fixed';
  minAmount: number;
  maxDiscount: number;
  validFrom: string;
  validUntil: string;
  isActive: boolean;
  usageLimit: number;
  usedCount: number;
}

@Component({
  selector: 'app-voucher',
  imports: [CommonModule, FormsModule],
  templateUrl: './voucher.html',
  styleUrl: './voucher.css'
})
export class Voucher implements OnInit {
  voucherCode = '';
  loading = false;
  voucher: VoucherData | null = null;
  isValid = false;
  errorMessage = '';

  constructor(private toastService: ToastService) {}

  ngOnInit() {
    // Component initialization
  }

  validateVoucher() {
    if (!this.voucherCode.trim()) {
      this.toastService.error('Please enter a voucher code');
      return;
    }

    this.loading = true;
    this.errorMessage = '';

    // Simulate API call to validate voucher
    // In a real app, you would call: this.voucherService.validateVoucher(this.voucherCode)
    setTimeout(() => {
      this.loading = false;
      
      // Mock validation - replace with real API call
      if (this.voucherCode.toUpperCase() === 'WELCOME10') {
        this.voucher = {
          id: '1',
          code: 'WELCOME10',
          discount: 10,
          discountType: 'percentage',
          minAmount: 50,
          maxDiscount: 100,
          validFrom: '2024-01-01',
          validUntil: '2024-12-31',
          isActive: true,
          usageLimit: 1000,
          usedCount: 150
        };
        this.isValid = true;
        this.toastService.success('Voucher applied successfully!');
      } else {
        this.isValid = false;
        this.voucher = null;
        this.errorMessage = 'Invalid voucher code';
        this.toastService.error('Invalid voucher code');
      }
    }, 1000);
  }

  clearVoucher() {
    this.voucherCode = '';
    this.voucher = null;
    this.isValid = false;
    this.errorMessage = '';
  }

  getDiscountText(): string {
    if (!this.voucher) return '';
    
    if (this.voucher.discountType === 'percentage') {
      return `${this.voucher.discount}% off`;
    } else {
      return `$${this.voucher.discount} off`;
    }
  }

  getMinAmountText(): string {
    if (!this.voucher) return '';
    return `Minimum order: $${this.voucher.minAmount}`;
  }

  getMaxDiscountText(): string {
    if (!this.voucher) return '';
    return `Maximum discount: $${this.voucher.maxDiscount}`;
  }

  isExpired(): boolean {
    if (!this.voucher) return false;
    return new Date() > new Date(this.voucher.validUntil);
  }

  isUsageLimitReached(): boolean {
    if (!this.voucher) return false;
    return this.voucher.usedCount >= this.voucher.usageLimit;
  }
}
