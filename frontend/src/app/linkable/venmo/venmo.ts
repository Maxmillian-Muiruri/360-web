import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from '../../shared/sidebar/sidebar';

@Component({
  selector: 'app-venmo',
  imports: [RouterModule, CommonModule, SidebarComponent],
  templateUrl: './venmo.html',
  styleUrl: './venmo.css'
})
export class Venmo {
  products = [
    {
      id: 'VEN001',
      name: 'USA - LINKABLE [DEBIT] | $1200+ USD BAL',
      category: 'LINKABLES',
      price: 180.00,
      image: 'https://via.placeholder.com/300x200/008CFF/ffffff?text=VENMO+DEBIT',
      alt: 'Venmo Debit Linkable',
      balance: '$1200+ USD',
      cardType: 'DEBIT',
      country: 'USA'
    },
    {
      id: 'VEN002',
      name: 'USA - LINKABLE [DEBIT] | $2000+ USD BAL',
      category: 'LINKABLES',
      price: 250.00,
      image: 'https://via.placeholder.com/300x200/008CFF/ffffff?text=VENMO+DEBIT',
      alt: 'Venmo Debit Linkable',
      balance: '$2000+ USD',
      cardType: 'DEBIT',
      country: 'USA'
    },
    {
      id: 'VEN003',
      name: 'USA - LINKABLE [CREDIT] | $2500+ USD BAL',
      category: 'LINKABLES',
      price: 320.00,
      image: 'https://via.placeholder.com/300x200/008CFF/ffffff?text=VENMO+CREDIT',
      alt: 'Venmo Credit Linkable',
      balance: '$2500+ USD',
      cardType: 'CREDIT',
      country: 'USA'
    },
    {
      id: 'VEN004',
      name: 'USA - LINKABLE [DEBIT] | $800+ USD BAL',
      category: 'LINKABLES',
      price: 120.00,
      image: 'https://via.placeholder.com/300x200/008CFF/ffffff?text=VENMO+BASIC',
      alt: 'Venmo Basic Linkable',
      balance: '$800+ USD',
      cardType: 'DEBIT',
      country: 'USA'
    },
    {
      id: 'VEN005',
      name: 'USA - LINKABLE [CREDIT] | $4000+ USD BAL',
      category: 'LINKABLES',
      price: 480.00,
      image: 'https://via.placeholder.com/300x200/008CFF/ffffff?text=VENMO+PREMIUM',
      alt: 'Venmo Premium Linkable',
      balance: '$4000+ USD',
      cardType: 'CREDIT',
      country: 'USA'
    }
  ];

  constructor(private router: Router) {}

  viewProduct(product: any) {
    this.router.navigate(['/product', product.id]);
  }
}
