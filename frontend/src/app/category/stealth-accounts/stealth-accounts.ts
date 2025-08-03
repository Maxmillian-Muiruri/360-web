import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from '../../shared/sidebar/sidebar';

@Component({
  selector: 'app-stealth-accounts',
  imports: [RouterModule, CommonModule, SidebarComponent],
  templateUrl: './stealth-accounts.html',
  styleUrl: './stealth-accounts.css'
})
export class StealthAccounts {
  // Stealth Accounts products data
  products = [
    {
      id: 'BITPAY001',
      name: 'BITPAY KYC VERIFIED ACCOUNT',
      category: 'STEALTH ACCOUNTS',
      price: 250.00,
      image: 'https://via.placeholder.com/300x200/1a1a1a/ffffff?text=BITPAY',
      alt: 'Bitpay KYC Verified Account',
      platform: 'Bitpay',
      verification: 'KYC Verified',
      features: ['High Limits', 'Instant Transfers', 'Full Access']
    },
    {
      id: 'STRIPE001',
      name: 'Stripe Business Account - Verified',
      category: 'STEALTH ACCOUNTS',
      price: 400.00,
      image: 'https://via.placeholder.com/300x200/6772e5/ffffff?text=STRIPE',
      alt: 'Stripe Business Account',
      platform: 'Stripe',
      verification: 'Business Verified',
      features: ['Payment Processing', 'High Volume', 'API Access']
    },
    {
      id: 'PAYPAL001',
      name: 'PayPal Business Account - KYC Complete',
      category: 'STEALTH ACCOUNTS',
      price: 300.00,
      image: 'https://via.placeholder.com/300x200/003087/ffffff?text=PAYPAL',
      alt: 'PayPal Business Account',
      platform: 'PayPal',
      verification: 'KYC Complete',
      features: ['Business Account', 'High Limits', 'Instant Withdrawals']
    },
    {
      id: 'SQUARE001',
      name: 'Square Business Account - Verified',
      category: 'STEALTH ACCOUNTS',
      price: 350.00,
      image: 'https://via.placeholder.com/300x200/00c851/ffffff?text=SQUARE',
      alt: 'Square Business Account',
      platform: 'Square',
      verification: 'Business Verified',
      features: ['Payment Processing', 'POS System', 'Analytics']
    },
    {
      id: 'ADYEN001',
      name: 'Adyen Merchant Account - Premium',
      category: 'STEALTH ACCOUNTS',
      price: 500.00,
      image: 'https://via.placeholder.com/300x200/0abf53/ffffff?text=ADYEN',
      alt: 'Adyen Merchant Account',
      platform: 'Adyen',
      verification: 'Premium Verified',
      features: ['Global Payments', 'High Volume', 'Multi-Currency']
    },
    {
      id: 'BRAINTREE001',
      name: 'Braintree Business Account - Verified',
      category: 'STEALTH ACCOUNTS',
      price: 280.00,
      image: 'https://via.placeholder.com/300x200/ff6600/ffffff?text=BRAINTREE',
      alt: 'Braintree Business Account',
      platform: 'Braintree',
      verification: 'Business Verified',
      features: ['Payment Gateway', 'Mobile Payments', 'Recurring Billing']
    }
  ];

  constructor(private router: Router) {}

  // View product details - navigate to product page
  viewProduct(product: any) {
    console.log('Viewing stealth account:', product);
    // Navigate to product details page with product ID
    this.router.navigate(['/product', product.id]);
  }
}
