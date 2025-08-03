import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from '../../shared/sidebar/sidebar';

@Component({
  selector: 'app-bitcoin-log',
  imports: [RouterModule, CommonModule, SidebarComponent],
  templateUrl: './bitcoin-log.html',
  styleUrl: './bitcoin-log.css'
})
export class BitcoinLog {
  // Bitcoin Log products data
  products = [
    {
      id: 'BTC001',
      name: 'Bitcoin Wallet - 0.5 BTC Balance',
      category: 'BITCOIN LOG',
      price: 15000.00,
      image: 'https://via.placeholder.com/300x200/ff9900/ffffff?text=BITCOIN',
      alt: 'Bitcoin Wallet',
      walletType: 'Hardware',
      balance: '0.5 BTC',
      status: 'Secure',
      features: ['Hardware Security', 'Cold Storage', 'Multi-Sig']
    },
    {
      id: 'BTC002',
      name: 'Bitcoin Wallet - 0.25 BTC Balance',
      category: 'BITCOIN LOG',
      price: 7500.00,
      image: 'https://via.placeholder.com/300x200/ff9900/ffffff?text=BITCOIN+MEDIUM',
      alt: 'Bitcoin Wallet Medium',
      walletType: 'Software',
      balance: '0.25 BTC',
      status: 'Verified',
      features: ['Software Wallet', 'Mobile Access', 'Backup Keys']
    },
    {
      id: 'BTC003',
      name: 'Bitcoin Wallet - 0.1 BTC Balance',
      category: 'BITCOIN LOG',
      price: 3000.00,
      image: 'https://via.placeholder.com/300x200/ff9900/ffffff?text=BITCOIN+SMALL',
      alt: 'Bitcoin Wallet Small',
      walletType: 'Mobile',
      balance: '0.1 BTC',
      status: 'Verified',
      features: ['Mobile App', 'Instant Transfers', 'QR Codes']
    },
    {
      id: 'BTC004',
      name: 'Bitcoin Wallet - 1.0 BTC Balance',
      category: 'BITCOIN LOG',
      price: 30000.00,
      image: 'https://via.placeholder.com/300x200/ff9900/ffffff?text=BITCOIN+LARGE',
      alt: 'Bitcoin Wallet Large',
      walletType: 'Hardware',
      balance: '1.0 BTC',
      status: 'Premium',
      features: ['Premium Hardware', 'Advanced Security', 'Insurance']
    },
    {
      id: 'BTC005',
      name: 'Bitcoin Wallet - 0.05 BTC Balance',
      category: 'BITCOIN LOG',
      price: 1500.00,
      image: 'https://via.placeholder.com/300x200/ff9900/ffffff?text=BITCOIN+MINI',
      alt: 'Bitcoin Wallet Mini',
      walletType: 'Web',
      balance: '0.05 BTC',
      status: 'Verified',
      features: ['Web Access', 'Easy Setup', 'Quick Transfers']
    },
    {
      id: 'BTC006',
      name: 'Bitcoin Wallet - 0.75 BTC Balance',
      category: 'BITCOIN LOG',
      price: 22500.00,
      image: 'https://via.placeholder.com/300x200/ff9900/ffffff?text=BITCOIN+PREMIUM',
      alt: 'Bitcoin Wallet Premium',
      walletType: 'Hardware',
      balance: '0.75 BTC',
      status: 'Premium',
      features: ['Enterprise Security', 'Multi-Currency', '24/7 Support']
    }
  ];

  constructor(private router: Router) {}

  // View product details - navigate to product page
  viewProduct(product: any) {
    console.log('Viewing Bitcoin log:', product);
    // Navigate to product details page with product ID
    this.router.navigate(['/product', product.id]);
  }
}
