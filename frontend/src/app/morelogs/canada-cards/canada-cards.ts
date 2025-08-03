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
  selector: 'app-canada-cards',
  standalone: true,
  imports: [RouterModule, CommonModule, SidebarComponent],
  templateUrl: './canada-cards.html',
  styleUrl: './canada-cards.css'
})
export class CanadaCards {
  products: Product[] = [
    {
      id: 'canadacard-001',
      name: 'RBC Visa Card',
      description: 'Royal Bank of Canada Visa card with rewards',
      price: 420,
      category: 'Canada Cards',
      cardType: 'Visa',
      bank: 'Royal Bank of Canada',
      country: 'Canada',
      cvv: 'Yes'
    },
    {
      id: 'canadacard-002',
      name: 'TD Mastercard',
      description: 'TD Canada Trust Mastercard with cashback',
      price: 380,
      category: 'Canada Cards',
      cardType: 'Mastercard',
      bank: 'TD Canada Trust',
      country: 'Canada',
      cvv: 'Yes'
    },
    {
      id: 'canadacard-003',
      name: 'Scotiabank Visa',
      description: 'Scotiabank Visa card with travel benefits',
      price: 450,
      category: 'Canada Cards',
      cardType: 'Visa',
      bank: 'Scotiabank',
      country: 'Canada',
      cvv: 'Yes'
    },
    {
      id: 'canadacard-004',
      name: 'BMO Mastercard',
      description: 'Bank of Montreal Mastercard with premium features',
      price: 520,
      category: 'Canada Cards',
      cardType: 'Mastercard',
      bank: 'Bank of Montreal',
      country: 'Canada',
      cvv: 'Yes'
    },
    {
      id: 'canadacard-005',
      name: 'CIBC Visa',
      description: 'CIBC Visa card with low APR',
      price: 350,
      category: 'Canada Cards',
      cardType: 'Visa',
      bank: 'CIBC',
      country: 'Canada',
      cvv: 'Yes'
    },
    {
      id: 'canadacard-006',
      name: 'National Bank Mastercard',
      description: 'National Bank Mastercard with rewards program',
      price: 480,
      category: 'Canada Cards',
      cardType: 'Mastercard',
      bank: 'National Bank',
      country: 'Canada',
      cvv: 'Yes'
    }
  ];

  constructor(private router: Router) {}

  viewProduct(productId: string): void {
    this.router.navigate(['/product', productId]);
  }
}
