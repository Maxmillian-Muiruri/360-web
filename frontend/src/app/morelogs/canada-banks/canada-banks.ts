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
  selector: 'app-canada-banks',
  standalone: true,
  imports: [RouterModule, CommonModule, SidebarComponent],
  templateUrl: './canada-banks.html',
  styleUrl: './canada-banks.css'
})
export class CanadaBanks {
  products: Product[] = [
    {
      id: 'canadabank-001',
      name: 'Royal Bank of Canada Account',
      description: 'RBC bank account with online banking access',
      price: 2200,
      category: 'Canada Banks',
      bankName: 'Royal Bank of Canada',
      balance: 35000,
      country: 'Canada',
      verification: 'Online Access'
    },
    {
      id: 'canadabank-002',
      name: 'TD Canada Trust Account',
      description: 'TD Bank account with mobile app access',
      price: 2400,
      category: 'Canada Banks',
      bankName: 'TD Canada Trust',
      balance: 42000,
      country: 'Canada',
      verification: 'Mobile Access'
    },
    {
      id: 'canadabank-003',
      name: 'Scotiabank Account',
      description: 'Scotiabank account with international banking',
      price: 2600,
      category: 'Canada Banks',
      bankName: 'Scotiabank',
      balance: 48000,
      country: 'Canada',
      verification: 'International'
    },
    {
      id: 'canadabank-004',
      name: 'Bank of Montreal Account',
      description: 'BMO account with investment services',
      price: 2800,
      category: 'Canada Banks',
      bankName: 'Bank of Montreal',
      balance: 52000,
      country: 'Canada',
      verification: 'Investment Access'
    },
    {
      id: 'canadabank-005',
      name: 'CIBC Account',
      description: 'CIBC account with credit card access',
      price: 2000,
      category: 'Canada Banks',
      bankName: 'CIBC',
      balance: 32000,
      country: 'Canada',
      verification: 'Credit Access'
    },
    {
      id: 'canadabank-006',
      name: 'National Bank Account',
      description: 'National Bank account with premium services',
      price: 3000,
      category: 'Canada Banks',
      bankName: 'National Bank',
      balance: 55000,
      country: 'Canada',
      verification: 'Premium Access'
    }
  ];

  constructor(private router: Router) {}

  viewProduct(productId: string): void {
    this.router.navigate(['/product', productId]);
  }
}
