import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from '../../shared/sidebar/sidebar';

@Component({
  selector: 'app-e-gift-cards',
  imports: [RouterModule, CommonModule, SidebarComponent],
  templateUrl: './e-gift-cards.html',
  styleUrl: './e-gift-cards.css'
})
export class EGiftCards {
  // E-Gift Cards products data
  products = [
    {
      id: 'AMAZON001',
      name: 'Amazon Gift Card - $500',
      category: 'E-GIFT CARDS',
      price: 450.00,
      image: 'https://via.placeholder.com/300x200/ff9900/ffffff?text=AMAZON',
      alt: 'Amazon Gift Card',
      brand: 'Amazon',
      value: '$500',
      delivery: 'Instant',
      region: 'USA'
    },
    {
      id: 'WALMART001',
      name: 'Walmart Gift Card - $300',
      category: 'E-GIFT CARDS',
      price: 270.00,
      image: 'https://via.placeholder.com/300x200/007dc6/ffffff?text=WALMART',
      alt: 'Walmart Gift Card',
      brand: 'Walmart',
      value: '$300',
      delivery: 'Instant',
      region: 'USA'
    },
    {
      id: 'TARGET001',
      name: 'Target Gift Card - $200',
      category: 'E-GIFT CARDS',
      price: 180.00,
      image: 'https://via.placeholder.com/300x200/cc0000/ffffff?text=TARGET',
      alt: 'Target Gift Card',
      brand: 'Target',
      value: '$200',
      delivery: 'Instant',
      region: 'USA'
    },
    {
      id: 'STEAM001',
      name: 'Steam Gift Card - $100',
      category: 'E-GIFT CARDS',
      price: 85.00,
      image: 'https://via.placeholder.com/300x200/1b2838/ffffff?text=STEAM',
      alt: 'Steam Gift Card',
      brand: 'Steam',
      value: '$100',
      delivery: 'Instant',
      region: 'Global'
    },
    {
      id: 'ITUNES001',
      name: 'iTunes Gift Card - $150',
      category: 'E-GIFT CARDS',
      price: 130.00,
      image: 'https://via.placeholder.com/300x200/000000/ffffff?text=ITUNES',
      alt: 'iTunes Gift Card',
      brand: 'iTunes',
      value: '$150',
      delivery: 'Instant',
      region: 'USA'
    },
    {
      id: 'GOOGLE001',
      name: 'Google Play Gift Card - $100',
      category: 'E-GIFT CARDS',
      price: 85.00,
      image: 'https://via.placeholder.com/300x200/4285f4/ffffff?text=GOOGLE+PLAY',
      alt: 'Google Play Gift Card',
      brand: 'Google Play',
      value: '$100',
      delivery: 'Instant',
      region: 'Global'
    },
    {
      id: 'NETFLIX001',
      name: 'Netflix Gift Card - $200',
      category: 'E-GIFT CARDS',
      price: 170.00,
      image: 'https://via.placeholder.com/300x200/e50914/ffffff?text=NETFLIX',
      alt: 'Netflix Gift Card',
      brand: 'Netflix',
      value: '$200',
      delivery: 'Instant',
      region: 'Global'
    },
    {
      id: 'SPOTIFY001',
      name: 'Spotify Gift Card - $100',
      category: 'E-GIFT CARDS',
      price: 85.00,
      image: 'https://via.placeholder.com/300x200/1db954/ffffff?text=SPOTIFY',
      alt: 'Spotify Gift Card',
      brand: 'Spotify',
      value: '$100',
      delivery: 'Instant',
      region: 'Global'
    }
  ];

  constructor(private router: Router) {}

  // View product details - navigate to product page
  viewProduct(product: any) {
    console.log('Viewing e-gift card:', product);
    // Navigate to product details page with product ID
    this.router.navigate(['/product', product.id]);
  }
}
