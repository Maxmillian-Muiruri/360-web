import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from '../../shared/sidebar/sidebar';

@Component({
  selector: 'app-googlepay',
  imports: [RouterModule, CommonModule, SidebarComponent],
  templateUrl: './googlepay.html',
  styleUrl: './googlepay.css'
})
export class Googlepay {
  products = [
    {
      id: 'GOOGLEPAY_TRANSFER001',
      name: 'Google Pay Transfer - $400 USD',
      category: 'TRANSFERS',
      price: 70.00,
      image: 'https://via.placeholder.com/300x200/4285F4/ffffff?text=GOOGLE+PAY+$400',
      alt: 'Google Pay $400 Transfer',
      amount: '$400 USD',
      speed: 'Instant',
      country: 'USA'
    },
    {
      id: 'GOOGLEPAY_TRANSFER002',
      name: 'Google Pay Transfer - $800 USD',
      category: 'TRANSFERS',
      price: 130.00,
      image: 'https://via.placeholder.com/300x200/4285F4/ffffff?text=GOOGLE+PAY+$800',
      alt: 'Google Pay $800 Transfer',
      amount: '$800 USD',
      speed: 'Instant',
      country: 'USA'
    },
    {
      id: 'GOOGLEPAY_TRANSFER003',
      name: 'Google Pay Transfer - $1500 USD',
      category: 'TRANSFERS',
      price: 240.00,
      image: 'https://via.placeholder.com/300x200/4285F4/ffffff?text=GOOGLE+PAY+$1500',
      alt: 'Google Pay $1500 Transfer',
      amount: '$1500 USD',
      speed: '1-2 Hours',
      country: 'USA'
    },
    {
      id: 'GOOGLEPAY_TRANSFER004',
      name: 'Google Pay Transfer - £500 GBP',
      category: 'TRANSFERS',
      price: 90.00,
      image: 'https://via.placeholder.com/300x200/4285F4/ffffff?text=GOOGLE+PAY+£500',
      alt: 'Google Pay £500 Transfer',
      amount: '£500 GBP',
      speed: 'Instant',
      country: 'UK'
    },
    {
      id: 'GOOGLEPAY_TRANSFER005',
      name: 'Google Pay Transfer - £1000 GBP',
      category: 'TRANSFERS',
      price: 170.00,
      image: 'https://via.placeholder.com/300x200/4285F4/ffffff?text=GOOGLE+PAY+£1000',
      alt: 'Google Pay £1000 Transfer',
      amount: '£1000 GBP',
      speed: 'Same Day',
      country: 'UK'
    },
    {
      id: 'GOOGLEPAY_TRANSFER006',
      name: 'Google Pay Transfer - $250 USD',
      category: 'TRANSFERS',
      price: 45.00,
      image: 'https://via.placeholder.com/300x200/4285F4/ffffff?text=GOOGLE+PAY+$250',
      alt: 'Google Pay $250 Transfer',
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
