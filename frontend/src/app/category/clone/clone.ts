import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from '../../shared/sidebar/sidebar';

@Component({
  selector: 'app-clone',
  imports: [RouterModule, CommonModule, SidebarComponent],
  templateUrl: './clone.html',
  styleUrl: './clone.css'
})
export class Clone {
  // Clone products data
  products = [
    {
      id: 'CLONE001',
      name: 'Website Clone - Complete Package',
      category: 'CLONE',
      price: 500.00,
      image: 'https://via.placeholder.com/300x200/0066cc/ffffff?text=WEBSITE+CLONE',
      alt: 'Website Clone Package',
      cloneType: 'Website',
      compatibility: 'All Platforms',
      setup: 'Easy',
      features: ['Complete Source Code', 'Database Setup', 'Installation Guide']
    },
    {
      id: 'CLONE002',
      name: 'Mobile App Clone - iOS/Android',
      category: 'CLONE',
      price: 800.00,
      image: 'https://via.placeholder.com/300x200/00cc00/ffffff?text=MOBILE+APP+CLONE',
      alt: 'Mobile App Clone',
      cloneType: 'Mobile App',
      compatibility: 'iOS & Android',
      setup: 'Advanced',
      features: ['Cross-platform', 'Native Performance', 'App Store Ready']
    },
    {
      id: 'CLONE003',
      name: 'E-commerce Clone - Full Stack',
      category: 'CLONE',
      price: 1200.00,
      image: 'https://via.placeholder.com/300x200/ff6600/ffffff?text=E-COMMERCE+CLONE',
      alt: 'E-commerce Clone',
      cloneType: 'E-commerce',
      compatibility: 'Web & Mobile',
      setup: 'Professional',
      features: ['Payment Integration', 'Admin Panel', 'Multi-vendor Support']
    },
    {
      id: 'CLONE004',
      name: 'Social Media Clone - Complete',
      category: 'CLONE',
      price: 900.00,
      image: 'https://via.placeholder.com/300x200/cc0000/ffffff?text=SOCIAL+MEDIA+CLONE',
      alt: 'Social Media Clone',
      cloneType: 'Social Media',
      compatibility: 'Web & Mobile',
      setup: 'Advanced',
      features: ['Real-time Chat', 'Media Sharing', 'User Profiles']
    },
    {
      id: 'CLONE005',
      name: 'Gaming Platform Clone - Premium',
      category: 'CLONE',
      price: 1500.00,
      image: 'https://via.placeholder.com/300x200/9900cc/ffffff?text=GAMING+PLATFORM+CLONE',
      alt: 'Gaming Platform Clone',
      cloneType: 'Gaming',
      compatibility: 'Multi-platform',
      setup: 'Expert',
      features: ['Game Integration', 'Leaderboards', 'Payment System']
    },
    {
      id: 'CLONE006',
      name: 'Cryptocurrency Exchange Clone',
      category: 'CLONE',
      price: 2000.00,
      image: 'https://via.placeholder.com/300x200/ff9900/ffffff?text=CRYPTO+EXCHANGE+CLONE',
      alt: 'Cryptocurrency Exchange Clone',
      cloneType: 'Crypto Exchange',
      compatibility: 'Web & API',
      setup: 'Expert',
      features: ['Trading Engine', 'Wallet Integration', 'Security Features']
    }
  ];

  constructor(private router: Router) {}

  // View product details - navigate to product page
  viewProduct(product: any) {
    console.log('Viewing clone:', product);
    // Navigate to product details page with product ID
    this.router.navigate(['/product', product.id]);
  }
}
