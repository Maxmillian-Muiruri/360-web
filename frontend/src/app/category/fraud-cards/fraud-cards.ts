import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from '../../shared/sidebar/sidebar';

@Component({
  selector: 'app-fraud-cards',
  imports: [RouterModule, CommonModule, SidebarComponent],
  templateUrl: './fraud-cards.html',
  styleUrl: './fraud-cards.css'
})
export class FraudCards {
  // Fraud Cards products data
  products = [
    {
      id: 'FC001',
      name: 'Premium Fraud Card - High Success Rate',
      category: 'FRAUD CARDS',
      price: 200.00,
      image: 'https://via.placeholder.com/300x200/cc0000/ffffff?text=FRAUD+CARD',
      alt: 'Premium Fraud Card',
      cardType: 'Premium',
      successRate: '95%',
      riskLevel: 'Low',
      features: ['High Success Rate', 'Advanced Bypass', '24/7 Support']
    },
    {
      id: 'FC002',
      name: 'Standard Fraud Card - Reliable',
      category: 'FRAUD CARDS',
      price: 150.00,
      image: 'https://via.placeholder.com/300x200/cc0000/ffffff?text=STANDARD+FRAUD',
      alt: 'Standard Fraud Card',
      cardType: 'Standard',
      successRate: '85%',
      riskLevel: 'Medium',
      features: ['Reliable Performance', 'Easy Setup', 'Good Support']
    },
    {
      id: 'FC003',
      name: 'Advanced Fraud Card - Professional',
      category: 'FRAUD CARDS',
      price: 300.00,
      image: 'https://via.placeholder.com/300x200/cc0000/ffffff?text=ADVANCED+FRAUD',
      alt: 'Advanced Fraud Card',
      cardType: 'Advanced',
      successRate: '98%',
      riskLevel: 'Very Low',
      features: ['Professional Grade', 'Maximum Security', 'Priority Support']
    },
    {
      id: 'FC004',
      name: 'Basic Fraud Card - Entry Level',
      category: 'FRAUD CARDS',
      price: 100.00,
      image: 'https://via.placeholder.com/300x200/cc0000/ffffff?text=BASIC+FRAUD',
      alt: 'Basic Fraud Card',
      cardType: 'Basic',
      successRate: '75%',
      riskLevel: 'High',
      features: ['Entry Level', 'Basic Features', 'Standard Support']
    },
    {
      id: 'FC005',
      name: 'Enterprise Fraud Card - Corporate',
      category: 'FRAUD CARDS',
      price: 500.00,
      image: 'https://via.placeholder.com/300x200/cc0000/ffffff?text=ENTERPRISE+FRAUD',
      alt: 'Enterprise Fraud Card',
      cardType: 'Enterprise',
      successRate: '99%',
      riskLevel: 'Minimal',
      features: ['Enterprise Security', 'Custom Solutions', 'Dedicated Support']
    },
    {
      id: 'FC006',
      name: 'Specialized Fraud Card - Targeted',
      category: 'FRAUD CARDS',
      price: 250.00,
      image: 'https://via.placeholder.com/300x200/cc0000/ffffff?text=SPECIALIZED+FRAUD',
      alt: 'Specialized Fraud Card',
      cardType: 'Specialized',
      successRate: '90%',
      riskLevel: 'Low',
      features: ['Targeted Approach', 'Specialized Tools', 'Expert Support']
    }
  ];

  constructor(private router: Router) {}

  // View product details - navigate to product page
  viewProduct(product: any) {
    console.log('Viewing fraud card:', product);
    // Navigate to product details page with product ID
    this.router.navigate(['/product', product.id]);
  }
}
