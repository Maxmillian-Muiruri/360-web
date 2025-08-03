import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from '../../shared/sidebar/sidebar';

@Component({
  selector: 'app-applepay',
  imports: [RouterModule, CommonModule, SidebarComponent],
  templateUrl: './applepay.html',
  styleUrl: './applepay.css'
})
export class Applepay {
  products = [
    {
      id: 'APPLEPAY_TRANSFER001',
      name: 'Apple Pay Transfer - $500 USD',
      category: 'TRANSFERS',
      price: 85.00,
      image: 'https://via.placeholder.com/300x200/000000/ffffff?text=APPLE+PAY+$500',
      alt: 'Apple Pay $500 Transfer',
      amount: '$500 USD',
      speed: 'Instant',
      country: 'USA'
    },
    {
      id: 'APPLEPAY_TRANSFER002',
      name: 'Apple Pay Transfer - $1000 USD',
      category: 'TRANSFERS',
      price: 160.00,
      image: 'https://via.placeholder.com/300x200/000000/ffffff?text=APPLE+PAY+$1000',
      alt: 'Apple Pay $1000 Transfer',
      amount: '$1000 USD',
      speed: 'Instant',
      country: 'USA'
    },
    {
      id: 'APPLEPAY_TRANSFER003',
      name: 'Apple Pay Transfer - $2000 USD',
      category: 'TRANSFERS',
      price: 300.00,
      image: 'https://via.placeholder.com/300x200/000000/ffffff?text=APPLE+PAY+$2000',
      alt: 'Apple Pay $2000 Transfer',
      amount: '$2000 USD',
      speed: '1-2 Hours',
      country: 'USA'
    },
    {
      id: 'APPLEPAY_TRANSFER004',
      name: 'Apple Pay Transfer - £600 GBP',
      category: 'TRANSFERS',
      price: 100.00,
      image: 'https://via.placeholder.com/300x200/000000/ffffff?text=APPLE+PAY+£600',
      alt: 'Apple Pay £600 Transfer',
      amount: '£600 GBP',
      speed: 'Instant',
      country: 'UK'
    },
    {
      id: 'APPLEPAY_TRANSFER005',
      name: 'Apple Pay Transfer - £1200 GBP',
      category: 'TRANSFERS',
      price: 190.00,
      image: 'https://via.placeholder.com/300x200/000000/ffffff?text=APPLE+PAY+£1200',
      alt: 'Apple Pay £1200 Transfer',
      amount: '£1200 GBP',
      speed: 'Same Day',
      country: 'UK'
    },
    {
      id: 'APPLEPAY_TRANSFER006',
      name: 'Apple Pay Transfer - $300 USD',
      category: 'TRANSFERS',
      price: 55.00,
      image: 'https://via.placeholder.com/300x200/000000/ffffff?text=APPLE+PAY+$300',
      alt: 'Apple Pay $300 Transfer',
      amount: '$300 USD',
      speed: 'Instant',
      country: 'USA'
    }
  ];

  constructor(private router: Router) {}

  viewProduct(product: any) {
    this.router.navigate(['/product', product.id]);
  }
}
