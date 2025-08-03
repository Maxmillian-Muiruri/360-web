import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
  alt: string;
  features?: string[];
  // Category-specific fields
  balance?: string;
  successRate?: string;
  cardType?: string;
  riskLevel?: string;
  accountType?: string;
  videoType?: string;
  duration?: string;
  quality?: string;
  cloneType?: string;
  compatibility?: string;
  setup?: string;
  productType?: string;
  delivery?: string;
  checkType?: string;
  amount?: string;
  processing?: string;
  serviceType?: string;
  connection?: string;
}

@Component({
  selector: 'app-shop',
  imports: [RouterModule, CommonModule],
  templateUrl: './shop.html',
  styleUrl: './shop.css'
})
export class Shop {
  // All products from all categories
  products: Product[] = [
    // Bank Logs
    {
      id: 'BL001',
      name: 'Premium Bank Log - Chase Bank',
      category: 'BANK LOGS',
      price: 500.00,
      image: 'https://via.placeholder.com/300x200/0066cc/ffffff?text=PREMIUM+BANK',
      alt: 'Premium Bank Log',
      balance: '$15,000+',
      features: ['High Balance', 'Full Access', '24/7 Support']
    },
    {
      id: 'BL002',
      name: 'Standard Bank Log - Wells Fargo',
      category: 'BANK LOGS',
      price: 350.00,
      image: 'https://via.placeholder.com/300x200/0066cc/ffffff?text=STANDARD+BANK',
      alt: 'Standard Bank Log',
      balance: '$8,000+',
      features: ['Reliable Access', 'Good Support', 'Verified']
    },
    {
      id: 'BL003',
      name: 'Advanced Bank Log - Bank of America',
      category: 'BANK LOGS',
      price: 600.00,
      image: 'https://via.placeholder.com/300x200/0066cc/ffffff?text=ADVANCED+BANK',
      alt: 'Advanced Bank Log',
      balance: '$25,000+',
      features: ['Maximum Balance', 'Priority Support', 'Premium Access']
    },

    // Transfers
    {
      id: 'TR001',
      name: 'PayPal Transfer - Instant',
      category: 'TRANSFERS',
      price: 200.00,
      image: 'https://via.placeholder.com/300x200/003087/ffffff?text=PAYPAL+TRANSFER',
      alt: 'PayPal Transfer',
      amount: '$1,000',
      features: ['Instant Transfer', 'Secure', 'Guaranteed']
    },
    {
      id: 'TR002',
      name: 'CashApp Transfer - Quick',
      category: 'TRANSFERS',
      price: 150.00,
      image: 'https://via.placeholder.com/300x200/00d632/ffffff?text=CASHAPP+TRANSFER',
      alt: 'CashApp Transfer',
      amount: '$800',
      features: ['Quick Transfer', 'Reliable', 'Fast Processing']
    },
    {
      id: 'TR003',
      name: 'Zelle Transfer - Professional',
      category: 'TRANSFERS',
      price: 250.00,
      image: 'https://via.placeholder.com/300x200/0066cc/ffffff?text=ZELLE+TRANSFER',
      alt: 'Zelle Transfer',
      amount: '$1,500',
      features: ['Professional Service', 'High Success', 'Priority Support']
    },

    // Stealth Accounts
    {
      id: 'SA001',
      name: 'Amazon Stealth Account - Verified',
      category: 'STEALTH ACCOUNTS',
      price: 150.00,
      image: 'https://via.placeholder.com/300x200/ff9900/ffffff?text=AMAZON+STEALTH',
      alt: 'Amazon Stealth Account',
      accountType: 'Verified',
      features: ['Verified Account', 'Prime Access', 'Clean History']
    },
    {
      id: 'SA002',
      name: 'eBay Stealth Account - Premium',
      category: 'STEALTH ACCOUNTS',
      price: 120.00,
      image: 'https://via.placeholder.com/300x200/86b817/ffffff?text=EBAY+STEALTH',
      alt: 'eBay Stealth Account',
      accountType: 'Premium',
      features: ['Premium Account', 'High Feedback', 'Trusted Seller']
    },
    {
      id: 'SA003',
      name: 'Walmart Stealth Account - Business',
      category: 'STEALTH ACCOUNTS',
      price: 180.00,
      image: 'https://via.placeholder.com/300x200/007dc6/ffffff?text=WALMART+STEALTH',
      alt: 'Walmart Stealth Account',
      accountType: 'Business',
      features: ['Business Account', 'Bulk Orders', 'Corporate Access']
    },

    // Fullz
    {
      id: 'FZ001',
      name: 'Premium Fullz - Complete Data',
      category: 'FULLZ',
      price: 300.00,
      image: 'https://via.placeholder.com/300x200/cc0000/ffffff?text=PREMIUM+FULLZ',
      alt: 'Premium Fullz',
      features: ['Complete Data', 'High Quality', 'Verified Information']
    },
    {
      id: 'FZ002',
      name: 'Standard Fullz - Basic Data',
      category: 'FULLZ',
      price: 200.00,
      image: 'https://via.placeholder.com/300x200/cc0000/ffffff?text=STANDARD+FULLZ',
      alt: 'Standard Fullz',
      features: ['Basic Data', 'Reliable', 'Good Quality']
    },

    // Tools
    {
      id: 'TL001',
      name: 'Carding Software - Professional',
      category: 'TOOLS',
      price: 400.00,
      image: 'https://via.placeholder.com/300x200/333333/ffffff?text=CARDING+SOFTWARE',
      alt: 'Carding Software',
      features: ['Professional Grade', 'Advanced Features', '24/7 Support']
    },
    {
      id: 'TL002',
      name: 'Hacking Tools - Premium',
      category: 'TOOLS',
      price: 350.00,
      image: 'https://via.placeholder.com/300x200/333333/ffffff?text=HACKING+TOOLS',
      alt: 'Hacking Tools',
      features: ['Premium Tools', 'Latest Version', 'Expert Support']
    },

    // E-Gift Cards
    {
      id: 'EG001',
      name: 'Amazon Gift Card - $500',
      category: 'E-GIFT CARDS',
      price: 450.00,
      image: 'https://via.placeholder.com/300x200/ff9900/ffffff?text=AMAZON+GIFT+CARD',
      alt: 'Amazon Gift Card',
      amount: '$500',
      features: ['Instant Delivery', 'Digital Format', 'Wide Acceptance']
    },
    {
      id: 'EG002',
      name: 'Walmart Gift Card - $300',
      category: 'E-GIFT CARDS',
      price: 270.00,
      image: 'https://via.placeholder.com/300x200/007dc6/ffffff?text=WALMART+GIFT+CARD',
      alt: 'Walmart Gift Card',
      amount: '$300',
      features: ['Fast Delivery', 'Digital Card', 'Store Credit']
    },

    // PayPal Log
    {
      id: 'PL001',
      name: 'PayPal Business Account - Verified',
      category: 'PAYPAL LOG',
      price: 250.00,
      image: 'https://via.placeholder.com/300x200/003087/ffffff?text=PAYPAL+BUSINESS',
      alt: 'PayPal Business Account',
      balance: '$2,000+',
      accountType: 'Business',
      features: ['Business Account', 'High Balance', 'Verified Status']
    },
    {
      id: 'PL002',
      name: 'PayPal Personal Account - Premium',
      category: 'PAYPAL LOG',
      price: 180.00,
      image: 'https://via.placeholder.com/300x200/003087/ffffff?text=PAYPAL+PERSONAL',
      alt: 'PayPal Personal Account',
      balance: '$1,500+',
      accountType: 'Personal',
      features: ['Personal Account', 'Good Balance', 'Clean History']
    },

    // CashApp Log
    {
      id: 'CL001',
      name: 'CashApp Account - High Balance',
      category: 'CASHAPP LOG',
      price: 200.00,
      image: 'https://via.placeholder.com/300x200/00d632/ffffff?text=CASHAPP+ACCOUNT',
      alt: 'CashApp Account',
      balance: '$1,800+',
      accountType: 'Verified',
      features: ['High Balance', 'Verified Account', 'Instant Transfers']
    },

    // Bitcoin Log
    {
      id: 'BL001',
      name: 'Bitcoin Wallet - Premium',
      category: 'BITCOIN LOG',
      price: 300.00,
      image: 'https://via.placeholder.com/300x200/ff9900/ffffff?text=BITCOIN+WALLET',
      alt: 'Bitcoin Wallet',
      balance: '0.5 BTC+',
      features: ['High Balance', 'Secure Wallet', 'Private Keys']
    },

    // Fraud Cards
    {
      id: 'FC001',
      name: 'Premium Fraud Card - High Success',
      category: 'FRAUD CARDS',
      price: 200.00,
      image: 'https://via.placeholder.com/300x200/cc0000/ffffff?text=PREMIUM+FRAUD',
      alt: 'Premium Fraud Card',
      cardType: 'Premium',
      successRate: '95%',
      riskLevel: 'Low',
      features: ['High Success Rate', 'Advanced Bypass', '24/7 Support']
    },

    // Clips
    {
      id: 'CP001',
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

    // Clone
    {
      id: 'CL001',
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

    // Carded Products
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

    // Deposit Check
    {
      id: 'DC001',
      name: 'Bank Deposit Check - $5,000',
      category: 'DEPOSIT CHECKS',
      price: 400.00,
      image: 'https://via.placeholder.com/300x200/0066cc/ffffff?text=BANK+CHECK',
      alt: 'Bank Deposit Check',
      checkType: 'Bank Check',
      amount: '$5,000',
      processing: '24-48 hours',
      features: ['Bank Verification', 'Secure Processing', 'Tracking Number']
    },

    // Linkable
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

    // Shake
    {
      id: 'SHAKE001',
      name: 'ShakePay Account - Premium',
      category: 'SHAKEPAY LOG',
      price: 200.00,
      image: 'https://via.placeholder.com/300x200/00cc00/ffffff?text=SHAKEPAY',
      alt: 'ShakePay Account',
      accountType: 'Premium',
      balance: '$1,500+',
      features: ['High Balance', 'Instant Transfers', 'Premium Support']
    },

    // Carded
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
    }
  ];

  // Pagination
  currentPage = 1;
  itemsPerPage = 12;
  totalPages = 1;

  constructor(private router: Router) {
    this.calculatePagination();
  }

  calculatePagination(): void {
    this.totalPages = Math.ceil(this.products.length / this.itemsPerPage);
  }

  get currentPageProducts(): Product[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.products.slice(startIndex, endIndex);
  }

  goToPage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
    }
  }

  previousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }

  get pageNumbers(): number[] {
    const pages = [];
    for (let i = 1; i <= this.totalPages; i++) {
      pages.push(i);
    }
    return pages;
  }

  viewProduct(product: Product): void {
    console.log('Viewing product:', product);
    this.router.navigate(['/product', product.id]);
  }
}
