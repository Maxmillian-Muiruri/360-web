import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from '../../shared/sidebar/sidebar';

@Component({
  selector: 'app-deposit-check',
  imports: [RouterModule, CommonModule, SidebarComponent],
  templateUrl: './deposit-check.html',
  styleUrl: './deposit-check.css'
})
export class DepositCheck {
  // Deposit Check products data
  products = [
    {
      id: 'DC001',
      name: 'Bank Deposit Check - $5,000',
      category: 'DEPOSIT CHECKS',
      price: 400.00,
      image: 'https://via.placeholder.com/300x200/0066cc/ffffff?text=BANK+CHECK',
      alt: 'Bank Deposit Check',
      checkType: 'Bank Check',
      amount: '$5,000',
      processing: '24-48 hours',
      features: ['Bank Verification', 'Secure Processing', 'Tracking Number']
    },
    {
      id: 'DC002',
      name: 'Cashier Check - $3,000',
      category: 'DEPOSIT CHECKS',
      price: 250.00,
      image: 'https://via.placeholder.com/300x200/00cc00/ffffff?text=CASHIER+CHECK',
      alt: 'Cashier Check',
      checkType: 'Cashier Check',
      amount: '$3,000',
      processing: '12-24 hours',
      features: ['Cashier Verification', 'Fast Processing', 'Guaranteed Funds']
    },
    {
      id: 'DC003',
      name: 'Money Order - $2,000',
      category: 'DEPOSIT CHECKS',
      price: 180.00,
      image: 'https://via.placeholder.com/300x200/ff6600/ffffff?text=MONEY+ORDER',
      alt: 'Money Order',
      checkType: 'Money Order',
      amount: '$2,000',
      processing: '6-12 hours',
      features: ['Money Order Service', 'Quick Processing', 'Reliable']
    },
    {
      id: 'DC004',
      name: 'Certified Check - $7,500',
      category: 'DEPOSIT CHECKS',
      price: 550.00,
      image: 'https://via.placeholder.com/300x200/cc0000/ffffff?text=CERTIFIED+CHECK',
      alt: 'Certified Check',
      checkType: 'Certified Check',
      amount: '$7,500',
      processing: '48-72 hours',
      features: ['Bank Certification', 'High Value', 'Premium Service']
    },
    {
      id: 'DC005',
      name: 'Personal Check - $1,500',
      category: 'DEPOSIT CHECKS',
      price: 120.00,
      image: 'https://via.placeholder.com/300x200/666666/ffffff?text=PERSONAL+CHECK',
      alt: 'Personal Check',
      checkType: 'Personal Check',
      amount: '$1,500',
      processing: '3-5 days',
      features: ['Personal Account', 'Standard Processing', 'Basic Service']
    },
    {
      id: 'DC006',
      name: 'Business Check - $10,000',
      category: 'DEPOSIT CHECKS',
      price: 750.00,
      image: 'https://via.placeholder.com/300x200/9900cc/ffffff?text=BUSINESS+CHECK',
      alt: 'Business Check',
      checkType: 'Business Check',
      amount: '$10,000',
      processing: '72-96 hours',
      features: ['Business Account', 'High Value', 'Corporate Service']
    }
  ];

  constructor(private router: Router) {}

  // View product details - navigate to product page
  viewProduct(product: any) {
    console.log('Viewing deposit check:', product);
    // Navigate to product details page with product ID
    this.router.navigate(['/product', product.id]);
  }
}
