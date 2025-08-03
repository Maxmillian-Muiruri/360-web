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
  selector: 'app-europe-cards',
  standalone: true,
  imports: [RouterModule, CommonModule, SidebarComponent],
  templateUrl: './europe-cards.html',
  styleUrl: './europe-cards.css'
})
export class EuropeCards {
  products: Product[] = [
    {
      id: 'eurocard-001',
      name: 'Deutsche Bank Visa',
      description: 'German Deutsche Bank Visa card with European acceptance',
      price: 580,
      category: 'Europe Cards',
      cardType: 'Visa',
      bank: 'Deutsche Bank',
      country: 'Germany',
      cvv: 'Yes'
    },
    {
      id: 'eurocard-002',
      name: 'BNP Paribas Mastercard',
      description: 'French BNP Paribas Mastercard with international benefits',
      price: 650,
      category: 'Europe Cards',
      cardType: 'Mastercard',
      bank: 'BNP Paribas',
      country: 'France',
      cvv: 'Yes'
    },
    {
      id: 'eurocard-003',
      name: 'Barclays Visa',
      description: 'UK Barclays Visa card with travel rewards',
      price: 520,
      category: 'Europe Cards',
      cardType: 'Visa',
      bank: 'Barclays',
      country: 'UK',
      cvv: 'Yes'
    },
    {
      id: 'eurocard-004',
      name: 'Santander Mastercard',
      description: 'Spanish Santander Mastercard with cashback',
      price: 480,
      category: 'Europe Cards',
      cardType: 'Mastercard',
      bank: 'Santander',
      country: 'Spain',
      cvv: 'Yes'
    },
    {
      id: 'eurocard-005',
      name: 'UniCredit Visa',
      description: 'Italian UniCredit Visa card with premium benefits',
      price: 550,
      category: 'Europe Cards',
      cardType: 'Visa',
      bank: 'UniCredit',
      country: 'Italy',
      cvv: 'Yes'
    },
    {
      id: 'eurocard-006',
      name: 'ING Mastercard',
      description: 'Dutch ING Mastercard with low fees',
      price: 420,
      category: 'Europe Cards',
      cardType: 'Mastercard',
      bank: 'ING',
      country: 'Netherlands',
      cvv: 'Yes'
    }
  ];

  constructor(private router: Router) {}

  viewProduct(productId: string): void {
    this.router.navigate(['/product', productId]);
  }
}
