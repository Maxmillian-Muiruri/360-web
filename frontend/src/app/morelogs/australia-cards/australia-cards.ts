import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from '../../shared/sidebar/sidebar';

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  cardType: string;
  bank: string;
  country: string;
  cvv: string;
}

@Component({
  selector: 'app-australia-cards',
  standalone: true,
  imports: [RouterModule, CommonModule, SidebarComponent],
  templateUrl: './australia-cards.html',
  styleUrl: './australia-cards.css'
})
export class AustraliaCards {
  products: Product[] = [
    {
      id: 'auscard-001',
      name: 'Commonwealth Bank Visa',
      description: 'Commonwealth Bank Visa card with rewards program',
      price: 480,
      category: 'Australia Cards',
      cardType: 'Visa',
      bank: 'Commonwealth Bank',
      country: 'Australia',
      cvv: 'Yes'
    },
    {
      id: 'auscard-002',
      name: 'ANZ Mastercard',
      description: 'ANZ Bank Mastercard with travel benefits',
      price: 520,
      category: 'Australia Cards',
      cardType: 'Mastercard',
      bank: 'ANZ Bank',
      country: 'Australia',
      cvv: 'Yes'
    },
    {
      id: 'auscard-003',
      name: 'Westpac Visa',
      description: 'Westpac Bank Visa card with cashback rewards',
      price: 450,
      category: 'Australia Cards',
      cardType: 'Visa',
      bank: 'Westpac Bank',
      country: 'Australia',
      cvv: 'Yes'
    },
    {
      id: 'auscard-004',
      name: 'NAB Mastercard',
      description: 'National Australia Bank Mastercard with low fees',
      price: 420,
      category: 'Australia Cards',
      cardType: 'Mastercard',
      bank: 'NAB',
      country: 'Australia',
      cvv: 'Yes'
    },
    {
      id: 'auscard-005',
      name: 'St. George Visa',
      description: 'St. George Bank Visa card with premium benefits',
      price: 550,
      category: 'Australia Cards',
      cardType: 'Visa',
      bank: 'St. George Bank',
      country: 'Australia',
      cvv: 'Yes'
    },
    {
      id: 'auscard-006',
      name: 'Bendigo Bank Mastercard',
      description: 'Bendigo Bank Mastercard with community focus',
      price: 380,
      category: 'Australia Cards',
      cardType: 'Mastercard',
      bank: 'Bendigo Bank',
      country: 'Australia',
      cvv: 'Yes'
    }
  ];

  constructor(private router: Router) {}

  viewProduct(productId: string): void {
    this.router.navigate(['/product', productId]);
  }
}
