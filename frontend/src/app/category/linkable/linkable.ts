import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from '../../shared/sidebar/sidebar';

@Component({
  selector: 'app-linkable',
  imports: [RouterModule, CommonModule, SidebarComponent],
  templateUrl: './linkable.html',
  styleUrl: './linkable.css'
})
export class Linkable {
  // Linkable products data
  products = [
    {
      id: 'LINK001',
      name: 'PayPal Linkable - Premium',
      category: 'LINKABLE',
      price: 200.00,
      image: 'https://via.placeholder.com/300x200/003087/ffffff?text=PAYPAL+LINKABLE',
      alt: 'PayPal Linkable',
      serviceType: 'PayPal',
      successRate: '95%',
      connection: 'Instant',
      features: ['High Success Rate', 'Instant Connection', '24/7 Support']
    },
    {
      id: 'LINK002',
      name: 'CashApp Linkable - Standard',
      category: 'LINKABLE',
      price: 150.00,
      image: 'https://via.placeholder.com/300x200/00d632/ffffff?text=CASHAPP+LINKABLE',
      alt: 'CashApp Linkable',
      serviceType: 'CashApp',
      successRate: '90%',
      connection: 'Quick',
      features: ['Reliable Connection', 'Fast Setup', 'Good Support']
    },
    {
      id: 'LINK003',
      name: 'Venmo Linkable - Advanced',
      category: 'LINKABLE',
      price: 180.00,
      image: 'https://via.placeholder.com/300x200/008cff/ffffff?text=VENMO+LINKABLE',
      alt: 'Venmo Linkable',
      serviceType: 'Venmo',
      successRate: '92%',
      connection: 'Instant',
      features: ['Advanced Methods', 'High Success', 'Premium Support']
    },
    {
      id: 'LINK004',
      name: 'Zelle Linkable - Professional',
      category: 'LINKABLE',
      price: 250.00,
      image: 'https://via.placeholder.com/300x200/0066cc/ffffff?text=ZELLE+LINKABLE',
      alt: 'Zelle Linkable',
      serviceType: 'Zelle',
      successRate: '98%',
      connection: 'Professional',
      features: ['Professional Grade', 'Maximum Success', 'Priority Support']
    },
    {
      id: 'LINK005',
      name: 'Apple Pay Linkable - Premium',
      category: 'LINKABLE',
      price: 300.00,
      image: 'https://via.placeholder.com/300x200/000000/ffffff?text=APPLE+PAY+LINKABLE',
      alt: 'Apple Pay Linkable',
      serviceType: 'Apple Pay',
      successRate: '96%',
      connection: 'Premium',
      features: ['Premium Service', 'High Success Rate', 'Expert Support']
    },
    {
      id: 'LINK006',
      name: 'Google Pay Linkable - Standard',
      category: 'LINKABLE',
      price: 120.00,
      image: 'https://via.placeholder.com/300x200/4285f4/ffffff?text=GOOGLE+PAY+LINKABLE',
      alt: 'Google Pay Linkable',
      serviceType: 'Google Pay',
      successRate: '85%',
      connection: 'Standard',
      features: ['Standard Service', 'Reliable Connection', 'Basic Support']
    }
  ];

  constructor(private router: Router) {}

  // View product details - navigate to product page
  viewProduct(product: any) {
    console.log('Viewing linkable:', product);
    // Navigate to product details page with product ID
    this.router.navigate(['/product', product.id]);
  }
}
