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
  selector: 'app-usa-banks',
  standalone: true,
  imports: [RouterModule, CommonModule, SidebarComponent],
  templateUrl: './usa-banks.html',
  styleUrl: './usa-banks.css'
})
export class UsaBanks {
  products: Product[] = [
    {
      id: 'usabank-001',
      name: 'Chase Bank Account',
      description: 'Premium Chase bank account with high balance and full access',
      price: 2500,
      category: 'USA Banks',
      bankName: 'Chase Bank',
      balance: 45000,
      country: 'USA',
      verification: 'Full Access'
    },
    {
      id: 'usabank-002',
      name: 'Bank of America Account',
      description: 'Complete Bank of America account with online banking access',
      price: 1800,
      category: 'USA Banks',
      bankName: 'Bank of America',
      balance: 32000,
      country: 'USA',
      verification: 'Online Access'
    },
    {
      id: 'usabank-003',
      name: 'Wells Fargo Account',
      description: 'Wells Fargo checking account with mobile app access',
      price: 2200,
      category: 'USA Banks',
      bankName: 'Wells Fargo',
      balance: 38000,
      country: 'USA',
      verification: 'Mobile Access'
    },
    {
      id: 'usabank-004',
      name: 'Citibank Account',
      description: 'Citibank premium account with international transfer capability',
      price: 3000,
      category: 'USA Banks',
      bankName: 'Citibank',
      balance: 55000,
      country: 'USA',
      verification: 'International'
    },
    {
      id: 'usabank-005',
      name: 'US Bank Account',
      description: 'US Bank checking account with ATM card access',
      price: 1600,
      category: 'USA Banks',
      bankName: 'US Bank',
      balance: 28000,
      country: 'USA',
      verification: 'ATM Access'
    },
    {
      id: 'usabank-006',
      name: 'PNC Bank Account',
      description: 'PNC Bank account with online and mobile banking',
      price: 1900,
      category: 'USA Banks',
      bankName: 'PNC Bank',
      balance: 35000,
      country: 'USA',
      verification: 'Full Access'
    }
  ];

  constructor(private router: Router) {}

  viewProduct(productId: string): void {
    this.router.navigate(['/product', productId]);
  }
}
