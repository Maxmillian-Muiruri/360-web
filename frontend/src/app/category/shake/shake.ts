import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from '../../shared/sidebar/sidebar';

@Component({
  selector: 'app-shake',
  imports: [RouterModule, CommonModule, SidebarComponent],
  templateUrl: './shake.html',
  styleUrl: './shake.css'
})
export class Shake {
  // Shake products data
  products = [
    {
      id: 'SHAKE001',
      name: 'ShakePay Account - Premium',
      category: 'SHAKEPAY LOG',
      price: 200.00,
      image: 'https://via.placeholder.com/300x200/00cc00/ffffff?text=SHAKEPAY',
      alt: 'ShakePay Account',
      accountType: 'Premium',
      balance: '$1,500+',
      features: ['High Balance', 'Instant Transfers', 'Premium Support']
    },
    {
      id: 'SHAKE002',
      name: 'ShakePay Account - Standard',
      category: 'SHAKEPAY LOG',
      price: 150.00,
      image: 'https://via.placeholder.com/300x200/00cc00/ffffff?text=SHAKEPAY+STANDARD',
      alt: 'ShakePay Account Standard',
      accountType: 'Standard',
      balance: '$800+',
      features: ['Reliable Service', 'Fast Transfers', 'Good Support']
    },
    {
      id: 'SHAKE003',
      name: 'ShakePay Account - Advanced',
      category: 'SHAKEPAY LOG',
      price: 250.00,
      image: 'https://via.placeholder.com/300x200/00cc00/ffffff?text=SHAKEPAY+ADVANCED',
      alt: 'ShakePay Account Advanced',
      accountType: 'Advanced',
      balance: '$2,000+',
      features: ['Advanced Features', 'High Limits', 'Priority Support']
    },
    {
      id: 'SHAKE004',
      name: 'ShakePay Account - Business',
      category: 'SHAKEPAY LOG',
      price: 300.00,
      image: 'https://via.placeholder.com/300x200/00cc00/ffffff?text=SHAKEPAY+BUSINESS',
      alt: 'ShakePay Business Account',
      accountType: 'Business',
      balance: '$3,000+',
      features: ['Business Account', 'High Volume', 'Dedicated Support']
    },
    {
      id: 'SHAKE005',
      name: 'ShakePay Account - Basic',
      category: 'SHAKEPAY LOG',
      price: 100.00,
      image: 'https://via.placeholder.com/300x200/00cc00/ffffff?text=SHAKEPAY+BASIC',
      alt: 'ShakePay Account Basic',
      accountType: 'Basic',
      balance: '$500+',
      features: ['Basic Service', 'Standard Transfers', 'Email Support']
    },
    {
      id: 'SHAKE006',
      name: 'ShakePay Account - Enterprise',
      category: 'SHAKEPAY LOG',
      price: 400.00,
      image: 'https://via.placeholder.com/300x200/00cc00/ffffff?text=SHAKEPAY+ENTERPRISE',
      alt: 'ShakePay Enterprise Account',
      accountType: 'Enterprise',
      balance: '$5,000+',
      features: ['Enterprise Features', 'Maximum Limits', '24/7 Support']
    }
  ];

  constructor(private router: Router) {}

  // View product details - navigate to product page
  viewProduct(product: any) {
    console.log('Viewing shake account:', product);
    // Navigate to product details page with product ID
    this.router.navigate(['/product', product.id]);
  }
}
