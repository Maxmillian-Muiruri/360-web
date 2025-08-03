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
  selector: 'app-usa-cards',
  standalone: true,
  imports: [RouterModule, CommonModule, SidebarComponent],
  templateUrl: './usa-cards.html',
  styleUrl: './usa-cards.css'
})
export class UsaCards {
  products: Product[] = [
    {
      id: 'usacard-001',
      name: 'Chase Visa Card',
      description: 'Premium Chase Visa credit card with high limit',
      price: 450,
      category: 'USA Cards',
      cardType: 'Visa',
      bank: 'Chase Bank',
      country: 'USA',
      cvv: 'Yes'
    },
    {
      id: 'usacard-002',
      name: 'Bank of America Mastercard',
      description: 'Bank of America Mastercard with cashback rewards',
      price: 380,
      category: 'USA Cards',
      cardType: 'Mastercard',
      bank: 'Bank of America',
      country: 'USA',
      cvv: 'Yes'
    },
    {
      id: 'usacard-003',
      name: 'Wells Fargo Visa',
      description: 'Wells Fargo Visa card with travel benefits',
      price: 520,
      category: 'USA Cards',
      cardType: 'Visa',
      bank: 'Wells Fargo',
      country: 'USA',
      cvv: 'Yes'
    },
    {
      id: 'usacard-004',
      name: 'Citibank Mastercard',
      description: 'Citibank Mastercard with international acceptance',
      price: 600,
      category: 'USA Cards',
      cardType: 'Mastercard',
      bank: 'Citibank',
      country: 'USA',
      cvv: 'Yes'
    },
    {
      id: 'usacard-005',
      name: 'US Bank Visa',
      description: 'US Bank Visa card with low APR',
      price: 320,
      category: 'USA Cards',
      cardType: 'Visa',
      bank: 'US Bank',
      country: 'USA',
      cvv: 'Yes'
    },
    {
      id: 'usacard-006',
      name: 'PNC Bank Mastercard',
      description: 'PNC Bank Mastercard with rewards program',
      price: 410,
      category: 'USA Cards',
      cardType: 'Mastercard',
      bank: 'PNC Bank',
      country: 'USA',
      cvv: 'Yes'
    }
  ];

  constructor(private router: Router) {}

  viewProduct(productId: string): void {
    this.router.navigate(['/product', productId]);
  }
}
