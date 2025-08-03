import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from '../../shared/sidebar/sidebar';

@Component({
  selector: 'app-transfers',
  imports: [RouterModule, CommonModule, SidebarComponent],
  templateUrl: './transfers.html',
  styleUrl: './transfers.css'
})
export class Transfers {
  // Transfers products data
  products = [
    {
      id: 'ZELLE001',
      name: '$1000 Zelle Transfer - USA',
      category: 'TRANSFERS',
      price: 150.00,
      image: 'https://via.placeholder.com/300x200/0066cc/ffffff?text=ZELLE',
      alt: 'Zelle Transfer',
      amount: '$1,000',
      service: 'Zelle',
      country: 'USA',
      speed: 'Instant'
    },
    {
      id: 'PAYTM001',
      name: '74,000 INR PayTM Transfer',
      category: 'TRANSFERS',
      price: 285.00,
      image: 'https://via.placeholder.com/300x200/ff6600/ffffff?text=PAYTM',
      alt: 'PayTM Transfer',
      amount: '74,000 INR',
      service: 'PayTM',
      country: 'India',
      speed: 'Instant'
    },
    {
      id: 'CASHAPP001',
      name: '$500 CashApp Transfer',
      category: 'TRANSFERS',
      price: 75.00,
      image: 'https://via.placeholder.com/300x200/00d632/ffffff?text=CASHAPP',
      alt: 'CashApp Transfer',
      amount: '$500',
      service: 'CashApp',
      country: 'USA',
      speed: 'Instant'
    },
    {
      id: 'PAYPAL001',
      name: '€800 PayPal Transfer - Europe',
      category: 'TRANSFERS',
      price: 120.00,
      image: 'https://via.placeholder.com/300x200/003087/ffffff?text=PAYPAL',
      alt: 'PayPal Transfer',
      amount: '€800',
      service: 'PayPal',
      country: 'Europe',
      speed: '1-2 hours'
    },
    {
      id: 'VENMO001',
      name: '$750 Venmo Transfer',
      category: 'TRANSFERS',
      price: 95.00,
      image: 'https://via.placeholder.com/300x200/008cff/ffffff?text=VENMO',
      alt: 'Venmo Transfer',
      amount: '$750',
      service: 'Venmo',
      country: 'USA',
      speed: 'Instant'
    },
    {
      id: 'APPLEPAY001',
      name: '$1200 Apple Pay Transfer',
      category: 'TRANSFERS',
      price: 180.00,
      image: 'https://via.placeholder.com/300x200/000000/ffffff?text=APPLE+PAY',
      alt: 'Apple Pay Transfer',
      amount: '$1,200',
      service: 'Apple Pay',
      country: 'USA',
      speed: 'Instant'
    }
  ];

  constructor(private router: Router) {}

  // View product details - navigate to product page
  viewProduct(product: any) {
    console.log('Viewing transfer:', product);
    // Navigate to product details page with product ID
    this.router.navigate(['/product', product.id]);
  }
}
