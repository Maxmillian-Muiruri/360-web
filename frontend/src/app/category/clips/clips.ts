import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from '../../shared/sidebar/sidebar';

@Component({
  selector: 'app-clips',
  imports: [RouterModule, CommonModule, SidebarComponent],
  templateUrl: './clips.html',
  styleUrl: './clips.css'
})
export class Clips {
  // Clips products data
  products = [
    {
      id: 'CLIP001',
      name: 'Cashout Tutorial - Complete Guide',
      category: 'CLIPS',
      price: 50.00,
      image: 'https://via.placeholder.com/300x200/000000/ffffff?text=CASHOUT+TUTORIAL',
      alt: 'Cashout Tutorial Video',
      videoType: 'Tutorial',
      duration: '45 min',
      quality: 'HD',
      features: ['Step-by-step Guide', 'HD Quality', 'Download Link']
    },
    {
      id: 'CLIP002',
      name: 'Carding Demonstration - Live Session',
      category: 'CLIPS',
      price: 75.00,
      image: 'https://via.placeholder.com/300x200/cc0000/ffffff?text=CARDING+DEMO',
      alt: 'Carding Demonstration',
      videoType: 'Demonstration',
      duration: '30 min',
      quality: 'HD',
      features: ['Live Demonstration', 'Real-time Process', 'Expert Commentary']
    },
    {
      id: 'CLIP003',
      name: 'Fraud Prevention Bypass - Advanced',
      category: 'CLIPS',
      price: 100.00,
      image: 'https://via.placeholder.com/300x200/0066cc/ffffff?text=FRAUD+BYPASS',
      alt: 'Fraud Prevention Bypass',
      videoType: 'Advanced',
      duration: '60 min',
      quality: '4K',
      features: ['Advanced Techniques', '4K Quality', 'Premium Content']
    },
    {
      id: 'CLIP004',
      name: 'Bank Transfer Guide - Step by Step',
      category: 'CLIPS',
      price: 40.00,
      image: 'https://via.placeholder.com/300x200/00cc00/ffffff?text=BANK+TRANSFER',
      alt: 'Bank Transfer Guide',
      videoType: 'Guide',
      duration: '25 min',
      quality: 'HD',
      features: ['Bank Transfer Methods', 'Multiple Banks', 'Success Tips']
    },
    {
      id: 'CLIP005',
      name: 'Cryptocurrency Cashout - Complete',
      category: 'CLIPS',
      price: 80.00,
      image: 'https://via.placeholder.com/300x200/ff9900/ffffff?text=CRYPTO+CASHOUT',
      alt: 'Cryptocurrency Cashout',
      videoType: 'Specialized',
      duration: '50 min',
      quality: 'HD',
      features: ['Crypto Methods', 'Multiple Coins', 'Security Tips']
    },
    {
      id: 'CLIP006',
      name: 'ATM Skimming Tutorial - Professional',
      category: 'CLIPS',
      price: 120.00,
      image: 'https://via.placeholder.com/300x200/666666/ffffff?text=ATM+SKIMMING',
      alt: 'ATM Skimming Tutorial',
      videoType: 'Professional',
      duration: '90 min',
      quality: '4K',
      features: ['Professional Grade', 'Equipment Guide', 'Safety Protocols']
    }
  ];

  constructor(private router: Router) {}

  // View product details - navigate to product page
  viewProduct(product: any) {
    console.log('Viewing clip:', product);
    // Navigate to product details page with product ID
    this.router.navigate(['/product', product.id]);
  }
}
