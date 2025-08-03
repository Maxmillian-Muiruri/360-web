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
  selector: 'app-africa-cards',
  standalone: true,
  imports: [RouterModule, CommonModule, SidebarComponent],
  templateUrl: './africa-cards.html',
  styleUrl: './africa-cards.css'
})
export class AfricaCards {
  products: Product[] = [
    {
      id: 'africacard-001',
      name: 'Standard Bank Visa',
      description: 'Standard Bank South Africa Visa card',
      price: 350,
      category: 'Africa Cards',
      cardType: 'Visa',
      bank: 'Standard Bank',
      country: 'South Africa',
      cvv: 'Yes'
    },
    {
      id: 'africacard-002',
      name: 'First National Bank Mastercard',
      description: 'FNB Mastercard with rewards program',
      price: 320,
      category: 'Africa Cards',
      cardType: 'Mastercard',
      bank: 'First National Bank',
      country: 'South Africa',
      cvv: 'Yes'
    },
    {
      id: 'africacard-003',
      name: 'Absa Bank Visa',
      description: 'Absa Bank Visa card with travel benefits',
      price: 380,
      category: 'Africa Cards',
      cardType: 'Visa',
      bank: 'Absa Bank',
      country: 'South Africa',
      cvv: 'Yes'
    },
    {
      id: 'africacard-004',
      name: 'Nedbank Mastercard',
      description: 'Nedbank Mastercard with cashback rewards',
      price: 340,
      category: 'Africa Cards',
      cardType: 'Mastercard',
      bank: 'Nedbank',
      country: 'South Africa',
      cvv: 'Yes'
    },
    {
      id: 'africacard-005',
      name: 'Access Bank Visa',
      description: 'Access Bank Nigeria Visa card',
      price: 280,
      category: 'Africa Cards',
      cardType: 'Visa',
      bank: 'Access Bank',
      country: 'Nigeria',
      cvv: 'Yes'
    },
    {
      id: 'africacard-006',
      name: 'GT Bank Mastercard',
      description: 'Guaranty Trust Bank Mastercard',
      price: 300,
      category: 'Africa Cards',
      cardType: 'Mastercard',
      bank: 'GT Bank',
      country: 'Nigeria',
      cvv: 'Yes'
    }
  ];

  constructor(private router: Router) {}

  viewProduct(productId: string): void {
    this.router.navigate(['/product', productId]);
  }
}
