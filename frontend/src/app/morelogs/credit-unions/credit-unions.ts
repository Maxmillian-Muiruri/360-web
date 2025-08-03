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
  unionName: string;
  balance: number;
  country: string;
  verification: string;
}

@Component({
  selector: 'app-credit-unions',
  standalone: true,
  imports: [RouterModule, CommonModule, SidebarComponent],
  templateUrl: './credit-unions.html',
  styleUrl: './credit-unions.css'
})
export class CreditUnions {
  products: Product[] = [
    {
      id: 'creditunion-001',
      name: 'Navy Federal Credit Union',
      description: 'Navy Federal Credit Union account with military benefits',
      price: 1800,
      category: 'Credit Union',
      unionName: 'Navy Federal CU',
      balance: 28000,
      country: 'USA',
      verification: 'Military Access'
    },
    {
      id: 'creditunion-002',
      name: 'Alliant Credit Union',
      description: 'Alliant Credit Union high-yield savings account',
      price: 1600,
      category: 'Credit Union',
      unionName: 'Alliant CU',
      balance: 25000,
      country: 'USA',
      verification: 'High Yield'
    },
    {
      id: 'creditunion-003',
      name: 'PenFed Credit Union',
      description: 'Pentagon Federal Credit Union with competitive rates',
      price: 1700,
      category: 'Credit Union',
      unionName: 'PenFed CU',
      balance: 30000,
      country: 'USA',
      verification: 'Competitive Rates'
    },
    {
      id: 'creditunion-004',
      name: 'State Employees Credit Union',
      description: 'State Employees Credit Union with low fees',
      price: 1400,
      category: 'Credit Union',
      unionName: 'State Employees CU',
      balance: 22000,
      country: 'USA',
      verification: 'Low Fees'
    },
    {
      id: 'creditunion-005',
      name: 'America First Credit Union',
      description: 'America First Credit Union with online banking',
      price: 1500,
      category: 'Credit Union',
      unionName: 'America First CU',
      balance: 26000,
      country: 'USA',
      verification: 'Online Access'
    },
    {
      id: 'creditunion-006',
      name: 'BECU Credit Union',
      description: 'Boeing Employees Credit Union with member benefits',
      price: 1900,
      category: 'Credit Union',
      unionName: 'BECU',
      balance: 32000,
      country: 'USA',
      verification: 'Member Benefits'
    }
  ];

  constructor(private router: Router) {}

  viewProduct(productId: string): void {
    this.router.navigate(['/product', productId]);
  }
}
