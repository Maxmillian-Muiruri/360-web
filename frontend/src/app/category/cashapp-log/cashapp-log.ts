import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from '../../shared/sidebar/sidebar';

@Component({
  selector: 'app-cashapp-log',
  imports: [RouterModule, CommonModule, SidebarComponent],
  templateUrl: './cashapp-log.html',
  styleUrl: './cashapp-log.css'
})
export class CashappLog {
  // CashApp Log products data
  products = [
    {
      id: 'CA001',
      name: 'CashApp Account - $1,500 Balance',
      category: 'CASHAPP LOG',
      price: 180.00,
      image: 'https://via.placeholder.com/300x200/00d632/ffffff?text=CASHAPP',
      alt: 'CashApp Account',
      accountType: 'Personal',
      balance: '$1,500',
      status: 'Verified',
      features: ['Instant Transfers', 'Mobile App', 'Cash Card Access']
    },
    {
      id: 'CA002',
      name: 'CashApp Business Account - $2,800 Balance',
      category: 'CASHAPP LOG',
      price: 320.00,
      image: 'https://via.placeholder.com/300x200/00d632/ffffff?text=CASHAPP+BUSINESS',
      alt: 'CashApp Business Account',
      accountType: 'Business',
      balance: '$2,800',
      status: 'Verified',
      features: ['Business Tools', 'High Limits', 'Analytics']
    },
    {
      id: 'CA003',
      name: 'CashApp Account - $800 Balance',
      category: 'CASHAPP LOG',
      price: 100.00,
      image: 'https://via.placeholder.com/300x200/00d632/ffffff?text=CASHAPP+SMALL',
      alt: 'CashApp Account Small',
      accountType: 'Personal',
      balance: '$800',
      status: 'Verified',
      features: ['Instant Transfers', 'Mobile App', 'Email Access']
    },
    {
      id: 'CA004',
      name: 'CashApp Account - $2,200 Balance',
      category: 'CASHAPP LOG',
      price: 260.00,
      image: 'https://via.placeholder.com/300x200/00d632/ffffff?text=CASHAPP+LARGE',
      alt: 'CashApp Account Large',
      accountType: 'Personal',
      balance: '$2,200',
      status: 'Verified',
      features: ['High Limits', 'Cash Card', 'Investment Access']
    },
    {
      id: 'CA005',
      name: 'CashApp Account - $1,200 Balance',
      category: 'CASHAPP LOG',
      price: 140.00,
      image: 'https://via.placeholder.com/300x200/00d632/ffffff?text=CASHAPP+MEDIUM',
      alt: 'CashApp Account Medium',
      accountType: 'Personal',
      balance: '$1,200',
      status: 'Verified',
      features: ['Instant Transfers', 'Mobile App', 'Direct Deposit']
    },
    {
      id: 'CA006',
      name: 'CashApp Account - $3,500 Balance',
      category: 'CASHAPP LOG',
      price: 400.00,
      image: 'https://via.placeholder.com/300x200/00d632/ffffff?text=CASHAPP+PREMIUM',
      alt: 'CashApp Account Premium',
      accountType: 'Premium',
      balance: '$3,500',
      status: 'Verified',
      features: ['Premium Support', 'High Limits', 'All Features']
    }
  ];

  constructor(private router: Router) {}

  // View product details - navigate to product page
  viewProduct(product: any) {
    console.log('Viewing CashApp log:', product);
    // Navigate to product details page with product ID
    this.router.navigate(['/product', product.id]);
  }
}
