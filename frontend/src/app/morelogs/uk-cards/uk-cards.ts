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
  selector: 'app-uk-cards',
  standalone: true,
  imports: [RouterModule, CommonModule, SidebarComponent],
  templateUrl: './uk-cards.html',
  styleUrl: './uk-cards.css'
})
export class UkCards {
  products: Product[] = [
    {
      id: 'ukcard-001',
      name: 'Barclays Visa Card',
      description: 'Barclays Visa credit card with rewards program',
      price: 480,
      category: 'UK Cards',
      cardType: 'Visa',
      bank: 'Barclays Bank',
      country: 'UK',
      cvv: 'Yes'
    },
    {
      id: 'ukcard-002',
      name: 'HSBC Mastercard',
      description: 'HSBC Mastercard with international benefits',
      price: 550,
      category: 'UK Cards',
      cardType: 'Mastercard',
      bank: 'HSBC Bank',
      country: 'UK',
      cvv: 'Yes'
    },
    {
      id: 'ukcard-003',
      name: 'Lloyds Visa',
      description: 'Lloyds Bank Visa card with cashback rewards',
      price: 420,
      category: 'UK Cards',
      cardType: 'Visa',
      bank: 'Lloyds Bank',
      country: 'UK',
      cvv: 'Yes'
    },
    {
      id: 'ukcard-004',
      name: 'NatWest Mastercard',
      description: 'NatWest Mastercard with travel insurance',
      price: 460,
      category: 'UK Cards',
      cardType: 'Mastercard',
      bank: 'NatWest Bank',
      country: 'UK',
      cvv: 'Yes'
    },
    {
      id: 'ukcard-005',
      name: 'Santander Visa',
      description: 'Santander UK Visa card with low APR',
      price: 380,
      category: 'UK Cards',
      cardType: 'Visa',
      bank: 'Santander UK',
      country: 'UK',
      cvv: 'Yes'
    },
    {
      id: 'ukcard-006',
      name: 'RBS Mastercard',
      description: 'Royal Bank of Scotland Mastercard with premium benefits',
      price: 520,
      category: 'UK Cards',
      cardType: 'Mastercard',
      bank: 'Royal Bank of Scotland',
      country: 'UK',
      cvv: 'Yes'
    }
  ];

  constructor(private router: Router) {}

  viewProduct(productId: string): void {
    this.router.navigate(['/product', productId]);
  }
}
