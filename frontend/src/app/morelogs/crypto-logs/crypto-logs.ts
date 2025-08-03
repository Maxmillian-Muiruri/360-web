import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from '../../shared/sidebar/sidebar';

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  cryptoType: string;
  balance: number;
  platform: string;
  verification: string;
}

@Component({
  selector: 'app-crypto-logs',
  standalone: true,
  imports: [RouterModule, CommonModule, SidebarComponent],
  templateUrl: './crypto-logs.html',
  styleUrl: './crypto-logs.css'
})
export class CryptoLogs {
  products: Product[] = [
    {
      id: 'crypto-001',
      name: 'Coinbase Pro Account',
      description: 'Coinbase Pro account with Bitcoin and Ethereum holdings',
      price: 1200,
      category: 'Crypto Logs',
      cryptoType: 'Bitcoin/Ethereum',
      balance: 2.5,
      platform: 'Coinbase Pro',
      verification: 'Full Access'
    },
    {
      id: 'crypto-002',
      name: 'Binance Account',
      description: 'Binance account with multiple cryptocurrency holdings',
      price: 1500,
      category: 'Crypto Logs',
      cryptoType: 'Multi-Crypto',
      balance: 0.8,
      platform: 'Binance',
      verification: 'Trading Access'
    },
    {
      id: 'crypto-003',
      name: 'Kraken Account',
      description: 'Kraken exchange account with advanced trading features',
      price: 1800,
      category: 'Crypto Logs',
      cryptoType: 'Bitcoin/Litecoin',
      balance: 1.2,
      platform: 'Kraken',
      verification: 'Advanced Trading'
    },
    {
      id: 'crypto-004',
      name: 'Gemini Account',
      description: 'Gemini exchange account with institutional features',
      price: 2200,
      category: 'Crypto Logs',
      cryptoType: 'Bitcoin/Ethereum',
      balance: 3.0,
      platform: 'Gemini',
      verification: 'Institutional'
    },
    {
      id: 'crypto-005',
      name: 'KuCoin Account',
      description: 'KuCoin account with altcoin trading capabilities',
      price: 900,
      category: 'Crypto Logs',
      cryptoType: 'Altcoins',
      balance: 5000,
      platform: 'KuCoin',
      verification: 'Altcoin Trading'
    },
    {
      id: 'crypto-006',
      name: 'Bitfinex Account',
      description: 'Bitfinex account with margin trading access',
      price: 2500,
      category: 'Crypto Logs',
      cryptoType: 'Bitcoin/USDT',
      balance: 1.8,
      platform: 'Bitfinex',
      verification: 'Margin Trading'
    }
  ];

  constructor(private router: Router) {}

  viewProduct(productId: string): void {
    this.router.navigate(['/product', productId]);
  }
}
