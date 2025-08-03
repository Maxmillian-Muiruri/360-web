import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from '../../shared/sidebar/sidebar';

@Component({
  selector: 'app-tools',
  imports: [RouterModule, CommonModule, SidebarComponent],
  templateUrl: './tools.html',
  styleUrl: './tools.css'
})
export class Tools {
  // Tools products data
  products = [
    {
      id: 'KYC001',
      name: 'KYC VERIFICATION SOFTWARE - 2FA BYPASS 2023',
      category: 'TOOLS',
      price: 350.00,
      image: 'https://via.placeholder.com/300x200/1a1a1a/ffffff?text=KYC+SOFTWARE',
      alt: 'KYC Verification Software',
      type: 'KYC Bypass',
      version: '2023',
      features: ['2FA Bypass', 'ID Verification', 'Real-time Processing'],
      delivery: 'Instant Download'
    },
    {
      id: 'CARDING001',
      name: 'Advanced Carding Software Suite',
      category: 'TOOLS',
      price: 280.00,
      image: 'https://via.placeholder.com/300x200/cc0000/ffffff?text=CARDING+SUITE',
      alt: 'Carding Software Suite',
      type: 'Carding Tools',
      version: 'Pro',
      features: ['Card Checker', 'BIN Lookup', 'CVV Generator'],
      delivery: 'Instant Download'
    },
    {
      id: 'SPOOFING001',
      name: 'Caller ID Spoofing Tool - Premium',
      category: 'TOOLS',
      price: 150.00,
      image: 'https://via.placeholder.com/300x200/0066cc/ffffff?text=SPOOFING+TOOL',
      alt: 'Caller ID Spoofing Tool',
      type: 'Spoofing',
      version: 'Premium',
      features: ['Caller ID Spoof', 'SMS Spoof', 'Voice Cloning'],
      delivery: 'Instant Download'
    },
    {
      id: 'TRACKING001',
      name: 'Advanced GPS Tracking Software',
      category: 'TOOLS',
      price: 200.00,
      image: 'https://via.placeholder.com/300x200/00cc00/ffffff?text=GPS+TRACKING',
      alt: 'GPS Tracking Software',
      type: 'Tracking',
      version: 'Advanced',
      features: ['Real-time GPS', 'Location History', 'Geofencing'],
      delivery: 'Instant Download'
    },
    {
      id: 'HACKING001',
      name: 'Penetration Testing Toolkit',
      category: 'TOOLS',
      price: 400.00,
      image: 'https://via.placeholder.com/300x200/ff6600/ffffff?text=PENETRATION+TOOLKIT',
      alt: 'Penetration Testing Toolkit',
      type: 'Security Testing',
      version: 'Professional',
      features: ['Vulnerability Scanner', 'Exploit Framework', 'Report Generator'],
      delivery: 'Instant Download'
    },
    {
      id: 'CRYPTO001',
      name: 'Cryptocurrency Mining Software',
      category: 'TOOLS',
      price: 180.00,
      image: 'https://via.placeholder.com/300x200/ffcc00/ffffff?text=CRYPTO+MINING',
      alt: 'Cryptocurrency Mining Software',
      type: 'Mining',
      version: 'Optimized',
      features: ['Multi-Algorithm', 'GPU Optimization', 'Profit Calculator'],
      delivery: 'Instant Download'
    }
  ];

  constructor(private router: Router) {}

  // View product details - navigate to product page
  viewProduct(product: any) {
    console.log('Viewing tool:', product);
    // Navigate to product details page with product ID
    this.router.navigate(['/product', product.id]);
  }
}
