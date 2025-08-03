import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from '../../shared/sidebar/sidebar';

@Component({
  selector: 'app-bank-logs',
  imports: [RouterModule, CommonModule, SidebarComponent],
  templateUrl: './bank-logs.html',
  styleUrl: './bank-logs.css'
})
export class BankLogs {
  // Bank Logs products data
  products = [
    {
      id: 'HUNT001',
      name: 'Huntington Bank - Balance $2,000-$5,000',
      category: 'BANK LOGS',
      price: 250.00,
      image: 'https://via.placeholder.com/300x200/0066cc/ffffff?text=HUNTINGTON',
      alt: 'Huntington Bank Log',
      balance: '$2,000 - $5,000',
      bank: 'Huntington Bank'
    },
    {
      id: 'TRUIST001',
      name: 'Truist Bank - Balance $5,000-$7,000',
      category: 'BANK LOGS',
      price: 300.00,
      image: 'https://via.placeholder.com/300x200/cc0000/ffffff?text=TRUIST',
      alt: 'Truist Bank Log',
      balance: '$5,000 - $7,000',
      bank: 'Truist Bank'
    },
    {
      id: 'NBC001',
      name: 'National Bank of Canada - Balance $2,000-$3,000',
      category: 'BANK LOGS',
      price: 200.00,
      image: 'https://via.placeholder.com/300x200/ff6600/ffffff?text=NBC',
      alt: 'National Bank of Canada',
      balance: '$2,000 - $3,000',
      bank: 'National Bank of Canada'
    },
    {
      id: 'CHASE001',
      name: 'Chase Bank - Balance $3,000-$6,000',
      category: 'BANK LOGS',
      price: 280.00,
      image: 'https://via.placeholder.com/300x200/0066cc/ffffff?text=CHASE',
      alt: 'Chase Bank Log',
      balance: '$3,000 - $6,000',
      bank: 'Chase Bank'
    },
    {
      id: 'BOA001',
      name: 'Bank of America - Balance $4,000-$8,000',
      category: 'BANK LOGS',
      price: 350.00,
      image: 'https://via.placeholder.com/300x200/cc0000/ffffff?text=BOA',
      alt: 'Bank of America Log',
      balance: '$4,000 - $8,000',
      bank: 'Bank of America'
    },
    {
      id: 'WELLS001',
      name: 'Wells Fargo - Balance $1,500-$4,000',
      category: 'BANK LOGS',
      price: 220.00,
      image: 'https://via.placeholder.com/300x200/cc0000/ffffff?text=WELLS',
      alt: 'Wells Fargo Log',
      balance: '$1,500 - $4,000',
      bank: 'Wells Fargo'
    }
  ];

  constructor(private router: Router) {}

  // View product details - navigate to product page
  viewProduct(product: any) {
    console.log('Viewing bank log:', product);
    // Navigate to product details page with product ID
    this.router.navigate(['/product', product.id]);
  }
}
