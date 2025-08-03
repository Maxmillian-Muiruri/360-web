import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from '../../shared/sidebar/sidebar';

@Component({
  selector: 'app-cashapp',
  imports: [RouterModule, CommonModule, SidebarComponent],
  templateUrl: './cashapp.html',
  styleUrl: './cashapp.css'
})
export class Cashapp {
  products = [
    {
      id: 'CASH_TRANSFER001',
      name: 'CashApp Transfer - $500 USD',
      category: 'TRANSFERS',
      price: 75.00,
      image: 'https://via.placeholder.com/300x200/00D632/ffffff?text=CASHAPP+$500',
      alt: 'CashApp $500 Transfer',
      amount: '$500 USD',
      speed: 'Instant',
      country: 'USA'
    },
    {
      id: 'CASH_TRANSFER002',
      name: 'CashApp Transfer - $1000 USD',
      category: 'TRANSFERS',
      price: 140.00,
      image: 'https://via.placeholder.com/300x200/00D632/ffffff?text=CASHAPP+$1000',
      alt: 'CashApp $1000 Transfer',
      amount: '$1000 USD',
      speed: 'Instant',
      country: 'USA'
    },
    {
      id: 'CASH_TRANSFER003',
      name: 'CashApp Transfer - $2000 USD',
      category: 'TRANSFERS',
      price: 250.00,
      image: 'https://via.placeholder.com/300x200/00D632/ffffff?text=CASHAPP+$2000',
      alt: 'CashApp $2000 Transfer',
      amount: '$2000 USD',
      speed: '1-2 Hours',
      country: 'USA'
    },
    {
      id: 'CASH_TRANSFER004',
      name: 'CashApp Transfer - $5000 USD',
      category: 'TRANSFERS',
      price: 550.00,
      image: 'https://via.placeholder.com/300x200/00D632/ffffff?text=CASHAPP+$5000',
      alt: 'CashApp $5000 Transfer',
      amount: '$5000 USD',
      speed: 'Same Day',
      country: 'USA'
    },
    {
      id: 'CASH_TRANSFER005',
      name: 'CashApp Transfer - $300 USD',
      category: 'TRANSFERS',
      price: 50.00,
      image: 'https://via.placeholder.com/300x200/00D632/ffffff?text=CASHAPP+$300',
      alt: 'CashApp $300 Transfer',
      amount: '$300 USD',
      speed: 'Instant',
      country: 'USA'
    },
    {
      id: 'CASH_TRANSFER006',
      name: 'CashApp Transfer - $750 USD',
      category: 'TRANSFERS',
      price: 110.00,
      image: 'https://via.placeholder.com/300x200/00D632/ffffff?text=CASHAPP+$750',
      alt: 'CashApp $750 Transfer',
      amount: '$750 USD',
      speed: 'Instant',
      country: 'USA'
    }
  ];

  constructor(private router: Router) {}

  viewProduct(product: any) {
    this.router.navigate(['/product', product.id]);
  }
}
