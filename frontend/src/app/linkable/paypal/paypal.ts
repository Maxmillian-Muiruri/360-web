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
      id: 'PAY001',
      name: 'USA - LINKABLE [DEBIT] | $1500+ USD BAL',
      category: 'LINKABLES',
      price: 200.00,
      image: 'https://via.placeholder.com/300x200/003087/ffffff?text=PAYPAL+DEBIT',
      alt: 'PayPal Debit Linkable',
      balance: '$1500+ USD',
      cardType: 'DEBIT',
      country: 'USA'
    },
    {
      id: 'PAY002',
      name: 'USA - LINKABLE [DEBIT] | $2500+ USD BAL',
      category: 'LINKABLES',
      price: 300.00,
      image: 'https://via.placeholder.com/300x200/003087/ffffff?text=PAYPAL+DEBIT',
      alt: 'PayPal Debit Linkable',
      balance: '$2500+ USD',
      cardType: 'DEBIT',
      country: 'USA'
    },
    {
      id: 'PAY003',
      name: 'USA - LINKABLE [CREDIT] | $3000+ USD BAL',
      category: 'LINKABLES',
      price: 400.00,
      image: 'https://via.placeholder.com/300x200/003087/ffffff?text=PAYPAL+CREDIT',
      alt: 'PayPal Credit Linkable',
      balance: '$3000+ USD',
      cardType: 'CREDIT',
      country: 'USA'
    },
    {
      id: 'PAY004',
      name: 'UK - LINKABLE [DEBIT] | £2000+ GBP BAL',
      category: 'LINKABLES',
      price: 250.00,
      image: 'https://via.placeholder.com/300x200/003087/ffffff?text=PAYPAL+UK',
      alt: 'PayPal UK Linkable',
      balance: '£2000+ GBP',
      cardType: 'DEBIT',
      country: 'UK'
    },
    {
      id: 'PAY005',
      name: 'UK - LINKABLE [CREDIT] | £3500+ GBP BAL',
      category: 'LINKABLES',
      price: 450.00,
      image: 'https://via.placeholder.com/300x200/003087/ffffff?text=PAYPAL+UK+CREDIT',
      alt: 'PayPal UK Credit Linkable',
      balance: '£3500+ GBP',
      cardType: 'CREDIT',
      country: 'UK'
    },
    {
      id: 'PAY006',
      name: 'USA - LINKABLE [DEBIT] | $1000+ USD BAL',
      category: 'LINKABLES',
      price: 150.00,
      image: 'https://via.placeholder.com/300x200/003087/ffffff?text=PAYPAL+BASIC',
      alt: 'PayPal Basic Linkable',
      balance: '$1000+ USD',
      cardType: 'DEBIT',
      country: 'USA'
    }
  ];

  constructor(private router: Router) {}

  viewProduct(product: any) {
    this.router.navigate(['/product', product.id]);
  }
}
