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
      id: 'GPAY001',
      name: 'USA - LINKABLE [DEBIT] | $1800+ USD BAL',
      category: 'LINKABLES',
      price: 220.00,
      image: 'https://via.placeholder.com/300x200/4285F4/ffffff?text=GOOGLE+PAY+DEBIT',
      alt: 'Google Pay Debit Linkable',
      balance: '$1800+ USD',
      cardType: 'DEBIT',
      country: 'USA'
    },
    {
      id: 'GPAY002',
      name: 'USA - LINKABLE [CREDIT] | $3000+ USD BAL',
      category: 'LINKABLES',
      price: 380.00,
      image: 'https://via.placeholder.com/300x200/4285F4/ffffff?text=GOOGLE+PAY+CREDIT',
      alt: 'Google Pay Credit Linkable',
      balance: '$3000+ USD',
      cardType: 'CREDIT',
      country: 'USA'
    },
    {
      id: 'GPAY003',
      name: 'UK - LINKABLE [DEBIT] | £1500+ GBP BAL',
      category: 'LINKABLES',
      price: 200.00,
      image: 'https://via.placeholder.com/300x200/4285F4/ffffff?text=GOOGLE+PAY+UK',
      alt: 'Google Pay UK Linkable',
      balance: '£1500+ GBP',
      cardType: 'DEBIT',
      country: 'UK'
    },
    {
      id: 'GPAY004',
      name: 'UK - LINKABLE [CREDIT] | £2500+ GBP BAL',
      category: 'LINKABLES',
      price: 320.00,
      image: 'https://via.placeholder.com/300x200/4285F4/ffffff?text=GOOGLE+PAY+UK+CREDIT',
      alt: 'Google Pay UK Credit Linkable',
      balance: '£2500+ GBP',
      cardType: 'CREDIT',
      country: 'UK'
    },
    {
      id: 'GPAY005',
      name: 'USA - LINKABLE [DEBIT] | $1000+ USD BAL',
      category: 'LINKABLES',
      price: 130.00,
      image: 'https://via.placeholder.com/300x200/4285F4/ffffff?text=GOOGLE+PAY+BASIC',
      alt: 'Google Pay Basic Linkable',
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
