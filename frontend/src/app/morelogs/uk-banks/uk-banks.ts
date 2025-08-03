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
  bankName: string;
  balance: number;
  country: string;
  verification: string;
}

@Component({
  selector: 'app-uk-banks',
  standalone: true,
  imports: [RouterModule, CommonModule, SidebarComponent],
  templateUrl: './uk-banks.html',
  styleUrl: './uk-banks.css'
})
export class UkBanks {
  products: Product[] = [
    {
      id: 'ukbank-001',
      name: 'Barclays Bank Account',
      description: 'Premium Barclays bank account with online banking access',
      price: 2800,
      category: 'UK Banks',
      bankName: 'Barclays Bank',
      balance: 42000,
      country: 'UK',
      verification: 'Full Access'
    },
    {
      id: 'ukbank-002',
      name: 'HSBC Bank Account',
      description: 'HSBC current account with international banking',
      price: 3200,
      category: 'UK Banks',
      bankName: 'HSBC Bank',
      balance: 55000,
      country: 'UK',
      verification: 'International'
    },
    {
      id: 'ukbank-003',
      name: 'Lloyds Bank Account',
      description: 'Lloyds Bank account with mobile app access',
      price: 2400,
      category: 'UK Banks',
      bankName: 'Lloyds Bank',
      balance: 38000,
      country: 'UK',
      verification: 'Mobile Access'
    },
    {
      id: 'ukbank-004',
      name: 'NatWest Bank Account',
      description: 'NatWest current account with rewards program',
      price: 2600,
      category: 'UK Banks',
      bankName: 'NatWest Bank',
      balance: 45000,
      country: 'UK',
      verification: 'Rewards Access'
    },
    {
      id: 'ukbank-005',
      name: 'Santander Bank Account',
      description: 'Santander UK account with cashback benefits',
      price: 2200,
      category: 'UK Banks',
      bankName: 'Santander UK',
      balance: 35000,
      country: 'UK',
      verification: 'Cashback'
    },
    {
      id: 'ukbank-006',
      name: 'RBS Bank Account',
      description: 'Royal Bank of Scotland account with premium features',
      price: 3000,
      category: 'UK Banks',
      bankName: 'Royal Bank of Scotland',
      balance: 48000,
      country: 'UK',
      verification: 'Premium Access'
    }
  ];

  constructor(private router: Router) {}

  viewProduct(productId: string): void {
    this.router.navigate(['/product', productId]);
  }
}
