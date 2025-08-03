import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from '../../shared/sidebar/sidebar';

@Component({
  selector: 'app-paypal-log',
  imports: [RouterModule, CommonModule, SidebarComponent],
  templateUrl: './paypal-log.html',
  styleUrl: './paypal-log.css'
})
export class PaypalLog {
  // PayPal Log products data
  products = [
    {
      id: 'PP001',
      name: 'PayPal Business Account - $2,500 Balance',
      category: 'PAYPAL LOG',
      price: 300.00,
      image: 'https://via.placeholder.com/300x200/003087/ffffff?text=PAYPAL',
      alt: 'PayPal Business Account',
      accountType: 'Business',
      balance: '$2,500',
      status: 'Verified',
      features: ['Instant Withdrawals', 'High Limits', 'API Access']
    },
    {
      id: 'PP002',
      name: 'PayPal Personal Account - $1,800 Balance',
      category: 'PAYPAL LOG',
      price: 220.00,
      image: 'https://via.placeholder.com/300x200/003087/ffffff?text=PAYPAL+PERSONAL',
      alt: 'PayPal Personal Account',
      accountType: 'Personal',
      balance: '$1,800',
      status: 'Verified',
      features: ['Instant Transfers', 'Mobile App', 'Email Access']
    },
    {
      id: 'PP003',
      name: 'PayPal Premier Account - $3,200 Balance',
      category: 'PAYPAL LOG',
      price: 380.00,
      image: 'https://via.placeholder.com/300x200/003087/ffffff?text=PAYPAL+PREMIER',
      alt: 'PayPal Premier Account',
      accountType: 'Premier',
      balance: '$3,200',
      status: 'Verified',
      features: ['Business Features', 'High Volume', 'Advanced Security']
    },
    {
      id: 'PP004',
      name: 'PayPal UK Account - £2,000 Balance',
      category: 'PAYPAL LOG',
      price: 280.00,
      image: 'https://via.placeholder.com/300x200/003087/ffffff?text=PAYPAL+UK',
      alt: 'PayPal UK Account',
      accountType: 'UK Business',
      balance: '£2,000',
      status: 'Verified',
      features: ['UK Banking', 'SEPA Transfers', 'Multi-Currency']
    },
    {
      id: 'PP005',
      name: 'PayPal EU Account - €1,500 Balance',
      category: 'PAYPAL LOG',
      price: 200.00,
      image: 'https://via.placeholder.com/300x200/003087/ffffff?text=PAYPAL+EU',
      alt: 'PayPal EU Account',
      accountType: 'EU Personal',
      balance: '€1,500',
      status: 'Verified',
      features: ['SEPA Support', 'EU Compliance', 'Instant Transfers']
    },
    {
      id: 'PP006',
      name: 'PayPal Canada Account - $1,200 CAD Balance',
      category: 'PAYPAL LOG',
      price: 160.00,
      image: 'https://via.placeholder.com/300x200/003087/ffffff?text=PAYPAL+CANADA',
      alt: 'PayPal Canada Account',
      accountType: 'Canada Personal',
      balance: '$1,200 CAD',
      status: 'Verified',
      features: ['Canadian Banking', 'Interac Support', 'Mobile App']
    }
  ];

  constructor(private router: Router) {}

  // View product details - navigate to product page
  viewProduct(product: any) {
    console.log('Viewing PayPal log:', product);
    // Navigate to product details page with product ID
    this.router.navigate(['/product', product.id]);
  }
}
