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
      id: 'APAY001',
      name: 'USA - LINKABLE [DEBIT] | $2000+ USD BAL',
      category: 'LINKABLES',
      price: 280.00,
      image: 'https://via.placeholder.com/300x200/000000/ffffff?text=APPLE+PAY+DEBIT',
      alt: 'Apple Pay Debit Linkable',
      balance: '$2000+ USD',
      cardType: 'DEBIT',
      country: 'USA'
    },
    {
      id: 'APAY002',
      name: 'USA - LINKABLE [CREDIT] | $3500+ USD BAL',
      category: 'LINKABLES',
      price: 420.00,
      image: 'https://via.placeholder.com/300x200/000000/ffffff?text=APPLE+PAY+CREDIT',
      alt: 'Apple Pay Credit Linkable',
      balance: '$3500+ USD',
      cardType: 'CREDIT',
      country: 'USA'
    },
    {
      id: 'APAY003',
      name: 'UK - LINKABLE [DEBIT] | £1800+ GBP BAL',
      category: 'LINKABLES',
      price: 240.00,
      image: 'https://via.placeholder.com/300x200/000000/ffffff?text=APPLE+PAY+UK',
      alt: 'Apple Pay UK Linkable',
      balance: '£1800+ GBP',
      cardType: 'DEBIT',
      country: 'UK'
    },
    {
      id: 'APAY004',
      name: 'UK - LINKABLE [CREDIT] | £3000+ GBP BAL',
      category: 'LINKABLES',
      price: 380.00,
      image: 'https://via.placeholder.com/300x200/000000/ffffff?text=APPLE+PAY+UK+CREDIT',
      alt: 'Apple Pay UK Credit Linkable',
      balance: '£3000+ GBP',
      cardType: 'CREDIT',
      country: 'UK'
    },
    {
      id: 'APAY005',
      name: 'USA - LINKABLE [DEBIT] | $1200+ USD BAL',
      category: 'LINKABLES',
      price: 160.00,
      image: 'https://via.placeholder.com/300x200/000000/ffffff?text=APPLE+PAY+BASIC',
      alt: 'Apple Pay Basic Linkable',
      balance: '$1200+ USD',
      cardType: 'DEBIT',
      country: 'USA'
    }
  ];

  constructor(private router: Router) {}

  viewProduct(product: any) {
    this.router.navigate(['/product', product.id]);
  }
}
