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
      id: 'CASH001',
      name: 'USA - LINKABLE [DEBIT] | $2000+ USD BAL',
      category: 'LINKABLES',
      price: 250.00,
      image: 'https://lh3.googleusercontent.com/d/1tIhQQKCDcuaWJteK-2j0TZMEnQfSaEeF',
      alt: 'CashApp Debit Linkable',
      balance: '$2000+ USD',
      cardType: 'DEBIT',
      country: 'USA'
    },
    {
      id: 'CASH002',
      name: 'USA - LINKABLE [DEBIT] | $3000+ USD BAL',
      category: 'LINKABLES',
      price: 350.00,
      image: 'https://lh3.googleusercontent.com/d/1sh2UYUjY2uKk6r8AjyrjLgWrAaN2X2Ko',
      alt: 'CashApp Debit Linkable',
      balance: '$3000+ USD',
      cardType: 'DEBIT',
      country: 'USA'
    },
    {
      id: 'CASH003',
      name: 'USA - LINKABLE [DEBIT] | $5000+ USD BAL',
      category: 'LINKABLES',
      price: 550.00,
      image: 'https://lh3.googleusercontent.com/d/1REVw7pmlgr-IZmwN7qFScZaEdUGSeM27',
      alt: 'CashApp Debit Linkable',
      balance: '$5000+ USD',
      cardType: 'DEBIT',
      country: 'USA'
    },
    {
      id: 'CASH004',
      name: 'USA - LINKABLE [CREDIT] | $3000+ USD BAL',
      category: 'LINKABLES',
      price: 350.00,
      image: 'https://lh3.googleusercontent.com/d/16DZREHenPqTVKzjYQRjBOqkNCZ_FxnGx',
      alt: 'CashApp Credit Linkable',
      balance: '$3000+ USD',
      cardType: 'CREDIT',
      country: 'USA'
    },
    {
      id: 'CASH005',
      name: 'USA - LINKABLE [CREDIT] | $6000+ USD BAL',
      category: 'LINKABLES',
      price: 650.00,
      image: 'https://lh3.googleusercontent.com/d/1wtIg3GK3n352K_jSphdWCt2bP37AV3gQ',
      alt: 'CashApp Credit Linkable',
      balance: '$6000+ USD',
      cardType: 'CREDIT',
      country: 'USA'
    },
    {
      id: 'CASH006',
      name: 'USA - LINKABLE [DEBIT] | $1000+ USD BAL',
      category: 'LINKABLES',
      price: 150.00,
      image: 'https://lh3.googleusercontent.com/d/17OFNoKr13LN7m98XveTjQlIDwbGDo83B',
      alt: 'CashApp Debit Linkable',
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
