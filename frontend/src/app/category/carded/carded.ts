import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from '../../shared/sidebar/sidebar';

@Component({
  selector: 'app-carded',
  imports: [RouterModule, CommonModule, SidebarComponent],
  templateUrl: './carded.html',
  styleUrl: './carded.css'
})
export class Carded {
  // Carded products data
  products = [
    {
      id: 'CARDED001',
      name: 'Carded Service - Premium',
      category: 'CARDED',
      price: 300.00,
      image: 'https://via.placeholder.com/300x200/cc0000/ffffff?text=CARDED+PREMIUM',
      alt: 'Carded Premium Service',
      serviceType: 'Premium',
      successRate: '95%',
      features: ['High Success Rate', 'Premium Support', 'Fast Processing']
    },
    {
      id: 'CARDED002',
      name: 'Carded Service - Standard',
      category: 'CARDED',
      price: 200.00,
      image: 'https://via.placeholder.com/300x200/cc0000/ffffff?text=CARDED+STANDARD',
      alt: 'Carded Standard Service',
      serviceType: 'Standard',
      successRate: '85%',
      features: ['Reliable Service', 'Good Support', 'Standard Processing']
    },
    {
      id: 'CARDED003',
      name: 'Carded Service - Advanced',
      category: 'CARDED',
      price: 400.00,
      image: 'https://via.placeholder.com/300x200/cc0000/ffffff?text=CARDED+ADVANCED',
      alt: 'Carded Advanced Service',
      serviceType: 'Advanced',
      successRate: '98%',
      features: ['Advanced Methods', 'Priority Support', 'Expert Processing']
    },
    {
      id: 'CARDED004',
      name: 'Carded Service - Professional',
      category: 'CARDED',
      price: 500.00,
      image: 'https://via.placeholder.com/300x200/cc0000/ffffff?text=CARDED+PROFESSIONAL',
      alt: 'Carded Professional Service',
      serviceType: 'Professional',
      successRate: '99%',
      features: ['Professional Grade', 'Dedicated Support', 'Maximum Success']
    },
    {
      id: 'CARDED005',
      name: 'Carded Service - Basic',
      category: 'CARDED',
      price: 150.00,
      image: 'https://via.placeholder.com/300x200/cc0000/ffffff?text=CARDED+BASIC',
      alt: 'Carded Basic Service',
      serviceType: 'Basic',
      successRate: '75%',
      features: ['Basic Service', 'Standard Support', 'Entry Level']
    },
    {
      id: 'CARDED006',
      name: 'Carded Service - Enterprise',
      category: 'CARDED',
      price: 600.00,
      image: 'https://via.placeholder.com/300x200/cc0000/ffffff?text=CARDED+ENTERPRISE',
      alt: 'Carded Enterprise Service',
      serviceType: 'Enterprise',
      successRate: '99.5%',
      features: ['Enterprise Level', '24/7 Support', 'Maximum Security']
    }
  ];

  constructor(private router: Router) {}

  // View product details - navigate to product page
  viewProduct(product: any) {
    console.log('Viewing carded service:', product);
    // Navigate to product details page with product ID
    this.router.navigate(['/product', product.id]);
  }
}
