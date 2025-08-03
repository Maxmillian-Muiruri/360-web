import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from '../../shared/sidebar/sidebar';

@Component({
  selector: 'app-carded-products',
  imports: [RouterModule, CommonModule, SidebarComponent],
  templateUrl: './carded-products.html',
  styleUrl: './carded-products.css'
})
export class CardedProducts {
  // Carded Products data
  products = [
    {
      id: 'CP001',
      name: 'Electronics Bundle - Carded',
      category: 'CARDED PRODUCTS',
      price: 300.00,
      image: 'https://via.placeholder.com/300x200/0066cc/ffffff?text=ELECTRONICS',
      alt: 'Electronics Bundle',
      productType: 'Electronics',
      delivery: 'Express',
      features: ['Latest Models', 'Warranty Included', 'Fast Shipping']
    },
    {
      id: 'CP002',
      name: 'Fashion Collection - Premium',
      category: 'CARDED PRODUCTS',
      price: 250.00,
      image: 'https://via.placeholder.com/300x200/cc0000/ffffff?text=FASHION',
      alt: 'Fashion Collection',
      productType: 'Fashion',
      delivery: 'Standard',
      features: ['Designer Brands', 'Multiple Sizes', 'Quality Guarantee']
    },
    {
      id: 'CP003',
      name: 'Gaming Equipment - Pro',
      category: 'CARDED PRODUCTS',
      price: 400.00,
      image: 'https://via.placeholder.com/300x200/9900cc/ffffff?text=GAMING',
      alt: 'Gaming Equipment',
      productType: 'Gaming',
      delivery: 'Express',
      features: ['Pro Gaming Gear', 'High Performance', 'Setup Included']
    },
    {
      id: 'CP004',
      name: 'Home & Garden - Complete',
      category: 'CARDED PRODUCTS',
      price: 180.00,
      image: 'https://via.placeholder.com/300x200/00cc00/ffffff?text=HOME+GARDEN',
      alt: 'Home & Garden',
      productType: 'Home & Garden',
      delivery: 'Standard',
      features: ['Quality Products', 'Installation Guide', 'Customer Support']
    },
    {
      id: 'CP005',
      name: 'Sports Equipment - Elite',
      category: 'CARDED PRODUCTS',
      price: 350.00,
      image: 'https://via.placeholder.com/300x200/ff6600/ffffff?text=SPORTS',
      alt: 'Sports Equipment',
      productType: 'Sports',
      delivery: 'Express',
      features: ['Professional Grade', 'Durable Materials', 'Performance Tested']
    },
    {
      id: 'CP006',
      name: 'Jewelry Collection - Luxury',
      category: 'CARDED PRODUCTS',
      price: 600.00,
      image: 'https://via.placeholder.com/300x200/ffcc00/ffffff?text=JEWELRY',
      alt: 'Jewelry Collection',
      productType: 'Jewelry',
      delivery: 'Premium',
      features: ['Luxury Items', 'Certified Quality', 'Insurance Included']
    }
  ];

  constructor(private router: Router) {}

  // View product details - navigate to product page
  viewProduct(product: any) {
    console.log('Viewing carded product:', product);
    // Navigate to product details page with product ID
    this.router.navigate(['/product', product.id]);
  }
}
