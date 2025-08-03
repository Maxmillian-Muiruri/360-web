import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from '../../shared/sidebar/sidebar';

@Component({
  selector: 'app-paypal',
  imports: [RouterModule, CommonModule, SidebarComponent],
  templateUrl: './paypal.html',
  styleUrl: './paypal.css'
})
export class Paypal {
  products = [
    {
      id: 'PAYPAL_TRANSFER001',
      name: 'PayPal Transfer - $400 USD',
      category: 'TRANSFERS',
      price: 80.00,
      image: 'https://via.placeholder.com/300x200/003087/ffffff?text=PAYPAL+$400',
      alt: 'PayPal $400 Transfer',
      amount: '$400 USD',
      speed: 'Instant',
      country: 'USA'
    },
    {
      id: 'PAYPAL_TRANSFER002',
      name: 'PayPal Transfer - $800 USD',
      category: 'TRANSFERS',
      price: 150.00,
      image: 'https://via.placeholder.com/300x200/003087/ffffff?text=PAYPAL+$800',
      alt: 'PayPal $800 Transfer',
      amount: '$800 USD',
      speed: 'Instant',
      country: 'USA'
    },
    {
      id: 'PAYPAL_TRANSFER003',
      name: 'PayPal Transfer - $1500 USD',
      category: 'TRANSFERS',
      price: 280.00,
      image: 'https://via.placeholder.com/300x200/003087/ffffff?text=PAYPAL+$1500',
      alt: 'PayPal $1500 Transfer',
      amount: '$1500 USD',
      speed: '1-2 Hours',
      country: 'USA'
    },
    {
      id: 'PAYPAL_TRANSFER004',
      name: 'PayPal Transfer - £600 GBP',
      category: 'TRANSFERS',
      price: 120.00,
      image: 'https://via.placeholder.com/300x200/003087/ffffff?text=PAYPAL+£600',
      alt: 'PayPal £600 Transfer',
      amount: '£600 GBP',
      speed: 'Instant',
      country: 'UK'
    },
    {
      id: 'PAYPAL_TRANSFER005',
      name: 'PayPal Transfer - £1200 GBP',
      category: 'TRANSFERS',
      price: 220.00,
      image: 'https://via.placeholder.com/300x200/003087/ffffff?text=PAYPAL+£1200',
      alt: 'PayPal £1200 Transfer',
      amount: '£1200 GBP',
      speed: 'Same Day',
      country: 'UK'
    },
    {
      id: 'PAYPAL_TRANSFER006',
      name: 'PayPal Transfer - $250 USD',
      category: 'TRANSFERS',
      price: 55.00,
      image: 'https://via.placeholder.com/300x200/003087/ffffff?text=PAYPAL+$250',
      alt: 'PayPal $250 Transfer',
      amount: '$250 USD',
      speed: 'Instant',
      country: 'USA'
    }
  ];

  constructor(private router: Router) {}

  viewProduct(product: any) {
    this.router.navigate(['/product', product.id]);
  }
}
