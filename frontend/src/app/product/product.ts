import { Component, OnInit } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastService } from '../services/toast.service';

interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
  description: string;
  stock: number;
  alt: string;
}

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product.html',
  styleUrl: './product.css'
})
export class ProductComponent implements OnInit {
  product: Product | null = null;
  quantity: number = 1;
  loading: boolean = true;
  error: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private location: Location,
    private toastService: ToastService
  ) {}

  ngOnInit() {
    // Get product ID from route parameter
    this.route.params.subscribe(params => {
      const productId = params['id'];
      if (productId) {
        this.loadProduct(productId);
      } else {
        this.error = 'Product not found';
        this.loading = false;
      }
    });
  }

  goBack() {
    // Use browser history to go back to previous page
    this.location.back();
  }

  loadProduct(productId: string) {
    // Simulate loading product data
    // In a real app, this would be an HTTP call to your backend
    setTimeout(() => {
      // Mock product data - including all categories, linkables, and transfers
      const mockProducts: Product[] = [
        // Original Home Page Products
        {
          id: 'Q8GWKIMO',
          name: 'BITPAY KYC VERIFIED ACCOUNT',
          category: 'STEALTH ACCOUNTS',
          price: 250.00,
          image: 'https://lh3.googleusercontent.com/d/1k4cp-l1nAMSPKBKhn0w48VDt6NypT95P',
          description: 'Fully verified Bitpay account with KYC completed. Ready for immediate use with high limits.',
          stock: 15,
          alt: 'bitpay kyc verified account'
        },
        {
          id: 'PAAR4IHC',
          name: 'Huntington - Bank Login, Balance within $2000 - $5000',
          category: 'BANK LOGS',
          price: 250.00,
          image: 'https://lh3.googleusercontent.com/d/1iVmJ0SXhStmrwyB5vF4wfwuEiva7Mg6h',
          description: 'Premium Huntington bank account with verified balance between $2000-$5000. Full access included.',
          stock: 8,
          alt: 'huntington - bank login, balance within $2000 - $5000'
        },
        {
          id: '0R7UPPNS',
          name: '$1000 Zelle Transfer – USA',
          category: 'TRANSFERS',
          price: 150.00,
          image: 'https://lh3.googleusercontent.com/d/1QbYkJjXQrnDMkJ4bsVkRaByE3Ztse4Lp',
          description: 'Instant $1000 Zelle transfer to any US bank account. Fast and secure transfer service.',
          stock: 25,
          alt: '$1000 zelle transfer – usa'
        },
        {
          id: 'P6PNZZD0',
          name: 'UK VISA [CREDIT] | 3500+ GBP Balance',
          category: 'CC & CVV',
          price: 300.00,
          image: 'https://lh3.googleusercontent.com/d/1Nv_JnokCyePzWwmSuhN-dp6OG_o145eV',
          description: 'UK Visa credit card with over 3500 GBP balance. Includes CVV and full card details.',
          stock: 12,
          alt: 'uk visa [credit] | 3500+ gbp balance'
        },
        {
          id: '1FGZCNY6',
          name: '74,000 INR PayTM Transfer',
          category: 'TRANSFERS',
          price: 285.00,
          image: 'https://lh3.googleusercontent.com/d/1Y8cYcSOOMCN2fepNPE3dULYo1CFPnxCn',
          description: 'Large PayTM transfer of 74,000 INR. Instant transfer to any Indian PayTM account.',
          stock: 5,
          alt: '74,000 inr paytm transfer'
        },
        {
          id: 'QVGW1CE6',
          name: 'National Bank of Canada [CANADA] - Bal [$2,000 - $3,000]',
          category: 'BANK LOGS',
          price: 200.00,
          image: 'https://lh3.googleusercontent.com/d/1oM2X3BQc_SWiGCLi_Nj8WFFG8YLV5lKe',
          description: 'Canadian National Bank account with verified balance between $2000-$3000 CAD.',
          stock: 10,
          alt: 'national bank of canada [canada] - bal [$2,000 - $3,000]'
        },
        {
          id: 'DYALZIK7',
          name: 'Truist Bank - Bal [$5,000 - $7,000]',
          category: 'BANK LOGS',
          price: 300.00,
          image: 'https://lh3.googleusercontent.com/d/1gJiTRiUteXqu_X2GnyoV06rFq-yD3NYU',
          description: 'Premium Truist Bank account with high balance between $5000-$7000. Full access provided.',
          stock: 6,
          alt: 'truist bank - bal [$5,000 - $7,000]'
        },
        {
          id: 'AM8PBE2H',
          name: 'Shakepay Log | 1500+ CAD Balance',
          category: 'SHAKEPAY LOG',
          price: 200.00,
          image: 'https://lh3.googleusercontent.com/d/1NjTURI6mxiP8nl4F-xGV6V4APMJSuFr5',
          description: 'Shakepay cryptocurrency account with over 1500 CAD balance. Ready for crypto transactions.',
          stock: 18,
          alt: 'shakepay log | 1500+ cad balance'
        },
        {
          id: 'HUKELDKS',
          name: 'USA VISA [DEBIT] | $5000+ Balance',
          category: 'CC & CVV',
          price: 450.00,
          image: 'https://lh3.googleusercontent.com/d/17fsF83jmJt6ian0V1YPeZBlpDQuqPZou',
          description: 'High-value USA Visa debit card with over $5000 balance. Includes PIN and full card details.',
          stock: 4,
          alt: 'usa visa [debit] | $5000+ balance'
        },
        {
          id: 'P4RRLWU7',
          name: 'KYC VERIFICATION SOFTWARE - 2FA BYPASS 2023',
          category: 'TOOLS',
          price: 350.00,
          image: 'https://lh3.googleusercontent.com/d/1F_inx7uKIc0xNekRhPauqNh5G-OKy9Ba',
          description: 'Advanced KYC verification software with 2FA bypass capabilities. Latest 2023 version.',
          stock: 20,
          alt: 'kyc verification software - 2fa bypass 2023'
        },

        // CashApp Linkables
        {
          id: 'CASH001',
          name: 'USA - LINKABLE [DEBIT] | $2000+ USD BAL',
          category: 'LINKABLES',
          price: 250.00,
          image: 'https://lh3.googleusercontent.com/d/1tIhQQKCDcuaWJteK-2j0TZMEnQfSaEeF',
          description: 'Premium CashApp linkable with $2000+ USD balance. Debit card linked and ready for instant transfers.',
          stock: 12,
          alt: 'CashApp Debit Linkable'
        },
        {
          id: 'CASH002',
          name: 'USA - LINKABLE [DEBIT] | $3000+ USD BAL',
          category: 'LINKABLES',
          price: 350.00,
          image: 'https://lh3.googleusercontent.com/d/1sh2UYUjY2uKk6r8AjyrjLgWrAaN2X2Ko',
          description: 'High-value CashApp linkable with $3000+ USD balance. Perfect for large transfers and transactions.',
          stock: 8,
          alt: 'CashApp Debit Linkable'
        },
        {
          id: 'CASH003',
          name: 'USA - LINKABLE [DEBIT] | $5000+ USD BAL',
          category: 'LINKABLES',
          price: 550.00,
          image: 'https://lh3.googleusercontent.com/d/1REVw7pmlgr-IZmwN7qFScZaEdUGSeM27',
          description: 'Premium CashApp linkable with $5000+ USD balance. Maximum limits and instant access.',
          stock: 5,
          alt: 'CashApp Debit Linkable'
        },
        {
          id: 'CASH004',
          name: 'USA - LINKABLE [CREDIT] | $3000+ USD BAL',
          category: 'LINKABLES',
          price: 350.00,
          image: 'https://lh3.googleusercontent.com/d/16DZREHenPqTVKzjYQRjBOqkNCZ_FxnGx',
          description: 'CashApp credit linkable with $3000+ USD balance. Credit card linked for maximum flexibility.',
          stock: 7,
          alt: 'CashApp Credit Linkable'
        },
        {
          id: 'CASH005',
          name: 'USA - LINKABLE [CREDIT] | $6000+ USD BAL',
          category: 'LINKABLES',
          price: 650.00,
          image: 'https://lh3.googleusercontent.com/d/1wtIg3GK3n352K_jSphdWCt2bP37AV3gQ',
          description: 'Premium CashApp credit linkable with $6000+ USD balance. High-limit credit access.',
          stock: 3,
          alt: 'CashApp Credit Linkable'
        },
        {
          id: 'CASH006',
          name: 'USA - LINKABLE [DEBIT] | $1000+ USD BAL',
          category: 'LINKABLES',
          price: 150.00,
          image: 'https://lh3.googleusercontent.com/d/17OFNoKr13LN7m98XveTjQlIDwbGDo83B',
          description: 'Basic CashApp linkable with $1000+ USD balance. Perfect for small transactions and testing.',
          stock: 20,
          alt: 'CashApp Debit Linkable'
        },

        // PayPal Linkables
        {
          id: 'PAY001',
          name: 'USA - LINKABLE [DEBIT] | $1500+ USD BAL',
          category: 'LINKABLES',
          price: 200.00,
          image: 'https://via.placeholder.com/300x200/003087/ffffff?text=PAYPAL+DEBIT',
          description: 'PayPal linkable with $1500+ USD balance. Debit card linked for secure transactions.',
          stock: 15,
          alt: 'PayPal Debit Linkable'
        },
        {
          id: 'PAY002',
          name: 'USA - LINKABLE [DEBIT] | $2500+ USD BAL',
          category: 'LINKABLES',
          price: 300.00,
          image: 'https://via.placeholder.com/300x200/003087/ffffff?text=PAYPAL+DEBIT',
          description: 'PayPal linkable with $2500+ USD balance. Medium-tier account with good limits.',
          stock: 10,
          alt: 'PayPal Debit Linkable'
        },
        {
          id: 'PAY003',
          name: 'USA - LINKABLE [CREDIT] | $3000+ USD BAL',
          category: 'LINKABLES',
          price: 400.00,
          image: 'https://via.placeholder.com/300x200/003087/ffffff?text=PAYPAL+CREDIT',
          description: 'PayPal credit linkable with $3000+ USD balance. Credit card access for larger transactions.',
          stock: 8,
          alt: 'PayPal Credit Linkable'
        },
        {
          id: 'PAY004',
          name: 'UK - LINKABLE [DEBIT] | £2000+ GBP BAL',
          category: 'LINKABLES',
          price: 250.00,
          image: 'https://via.placeholder.com/300x200/003087/ffffff?text=PAYPAL+UK',
          description: 'UK PayPal linkable with £2000+ GBP balance. European account with local currency.',
          stock: 6,
          alt: 'PayPal UK Linkable'
        },
        {
          id: 'PAY005',
          name: 'UK - LINKABLE [CREDIT] | £3500+ GBP BAL',
          category: 'LINKABLES',
          price: 450.00,
          image: 'https://via.placeholder.com/300x200/003087/ffffff?text=PAYPAL+UK+CREDIT',
          description: 'UK PayPal credit linkable with £3500+ GBP balance. High-value European account.',
          stock: 4,
          alt: 'PayPal UK Credit Linkable'
        },
        {
          id: 'PAY006',
          name: 'USA - LINKABLE [DEBIT] | $1000+ USD BAL',
          category: 'LINKABLES',
          price: 150.00,
          image: 'https://via.placeholder.com/300x200/003087/ffffff?text=PAYPAL+BASIC',
          description: 'Basic PayPal linkable with $1000+ USD balance. Entry-level account for beginners.',
          stock: 25,
          alt: 'PayPal Basic Linkable'
        },

        // Venmo Linkables
        {
          id: 'VEN001',
          name: 'USA - LINKABLE [DEBIT] | $1200+ USD BAL',
          category: 'LINKABLES',
          price: 180.00,
          image: 'https://via.placeholder.com/300x200/008CFF/ffffff?text=VENMO+DEBIT',
          description: 'Venmo linkable with $1200+ USD balance. Social payment platform access.',
          stock: 18,
          alt: 'Venmo Debit Linkable'
        },
        {
          id: 'VEN002',
          name: 'USA - LINKABLE [DEBIT] | $2000+ USD BAL',
          category: 'LINKABLES',
          price: 250.00,
          image: 'https://via.placeholder.com/300x200/008CFF/ffffff?text=VENMO+DEBIT',
          description: 'Venmo linkable with $2000+ USD balance. Medium-tier social payment account.',
          stock: 12,
          alt: 'Venmo Debit Linkable'
        },
        {
          id: 'VEN003',
          name: 'USA - LINKABLE [CREDIT] | $2500+ USD BAL',
          category: 'LINKABLES',
          price: 320.00,
          image: 'https://via.placeholder.com/300x200/008CFF/ffffff?text=VENMO+CREDIT',
          description: 'Venmo credit linkable with $2500+ USD balance. Credit card access for social payments.',
          stock: 9,
          alt: 'Venmo Credit Linkable'
        },
        {
          id: 'VEN004',
          name: 'USA - LINKABLE [DEBIT] | $800+ USD BAL',
          category: 'LINKABLES',
          price: 120.00,
          image: 'https://via.placeholder.com/300x200/008CFF/ffffff?text=VENMO+BASIC',
          description: 'Basic Venmo linkable with $800+ USD balance. Entry-level social payment account.',
          stock: 30,
          alt: 'Venmo Basic Linkable'
        },
        {
          id: 'VEN005',
          name: 'USA - LINKABLE [CREDIT] | $4000+ USD BAL',
          category: 'LINKABLES',
          price: 480.00,
          image: 'https://via.placeholder.com/300x200/008CFF/ffffff?text=VENMO+PREMIUM',
          description: 'Premium Venmo credit linkable with $4000+ USD balance. High-limit social payment access.',
          stock: 5,
          alt: 'Venmo Premium Linkable'
        },

        // GooglePay Linkables
        {
          id: 'GPAY001',
          name: 'USA - LINKABLE [DEBIT] | $1800+ USD BAL',
          category: 'LINKABLES',
          price: 220.00,
          image: 'https://via.placeholder.com/300x200/4285F4/ffffff?text=GOOGLE+PAY+DEBIT',
          description: 'Google Pay linkable with $1800+ USD balance. Android payment platform access.',
          stock: 14,
          alt: 'Google Pay Debit Linkable'
        },
        {
          id: 'GPAY002',
          name: 'USA - LINKABLE [CREDIT] | $3000+ USD BAL',
          category: 'LINKABLES',
          price: 380.00,
          image: 'https://via.placeholder.com/300x200/4285F4/ffffff?text=GOOGLE+PAY+CREDIT',
          description: 'Google Pay credit linkable with $3000+ USD balance. Credit card access for Android payments.',
          stock: 8,
          alt: 'Google Pay Credit Linkable'
        },
        {
          id: 'GPAY003',
          name: 'UK - LINKABLE [DEBIT] | £1500+ GBP BAL',
          category: 'LINKABLES',
          price: 200.00,
          image: 'https://via.placeholder.com/300x200/4285F4/ffffff?text=GOOGLE+PAY+UK',
          description: 'UK Google Pay linkable with £1500+ GBP balance. European Android payment account.',
          stock: 7,
          alt: 'Google Pay UK Linkable'
        },
        {
          id: 'GPAY004',
          name: 'UK - LINKABLE [CREDIT] | £2500+ GBP BAL',
          category: 'LINKABLES',
          price: 320.00,
          image: 'https://via.placeholder.com/300x200/4285F4/ffffff?text=GOOGLE+PAY+UK+CREDIT',
          description: 'UK Google Pay credit linkable with £2500+ GBP balance. High-value European Android account.',
          stock: 4,
          alt: 'Google Pay UK Credit Linkable'
        },
        {
          id: 'GPAY005',
          name: 'USA - LINKABLE [DEBIT] | $1000+ USD BAL',
          category: 'LINKABLES',
          price: 130.00,
          image: 'https://via.placeholder.com/300x200/4285F4/ffffff?text=GOOGLE+PAY+BASIC',
          description: 'Basic Google Pay linkable with $1000+ USD balance. Entry-level Android payment account.',
          stock: 25,
          alt: 'Google Pay Basic Linkable'
        },

        // ApplePay Linkables
        {
          id: 'APAY001',
          name: 'USA - LINKABLE [DEBIT] | $2000+ USD BAL',
          category: 'LINKABLES',
          price: 280.00,
          image: 'https://via.placeholder.com/300x200/000000/ffffff?text=APPLE+PAY+DEBIT',
          description: 'Apple Pay linkable with $2000+ USD balance. iOS payment platform access.',
          stock: 11,
          alt: 'Apple Pay Debit Linkable'
        },
        {
          id: 'APAY002',
          name: 'USA - LINKABLE [CREDIT] | $3500+ USD BAL',
          category: 'LINKABLES',
          price: 420.00,
          image: 'https://via.placeholder.com/300x200/000000/ffffff?text=APPLE+PAY+CREDIT',
          description: 'Apple Pay credit linkable with $3500+ USD balance. Credit card access for iOS payments.',
          stock: 6,
          alt: 'Apple Pay Credit Linkable'
        },
        {
          id: 'APAY003',
          name: 'UK - LINKABLE [DEBIT] | £1800+ GBP BAL',
          category: 'LINKABLES',
          price: 240.00,
          image: 'https://via.placeholder.com/300x200/000000/ffffff?text=APPLE+PAY+UK',
          description: 'UK Apple Pay linkable with £1800+ GBP balance. European iOS payment account.',
          stock: 5,
          alt: 'Apple Pay UK Linkable'
        },
        {
          id: 'APAY004',
          name: 'UK - LINKABLE [CREDIT] | £3000+ GBP BAL',
          category: 'LINKABLES',
          price: 380.00,
          image: 'https://via.placeholder.com/300x200/000000/ffffff?text=APPLE+PAY+UK+CREDIT',
          description: 'UK Apple Pay credit linkable with £3000+ GBP balance. High-value European iOS account.',
          stock: 3,
          alt: 'Apple Pay UK Credit Linkable'
        },
        {
          id: 'APAY005',
          name: 'USA - LINKABLE [DEBIT] | $1200+ USD BAL',
          category: 'LINKABLES',
          price: 160.00,
          image: 'https://via.placeholder.com/300x200/000000/ffffff?text=APPLE+PAY+BASIC',
          description: 'Basic Apple Pay linkable with $1200+ USD balance. Entry-level iOS payment account.',
          stock: 20,
          alt: 'Apple Pay Basic Linkable'
        },

        // Transfer Products (from transfers components)
        {
          id: 'TR001',
          name: 'PayPal Transfer - Instant',
          category: 'TRANSFERS',
          price: 200.00,
          image: 'https://via.placeholder.com/300x200/003087/ffffff?text=PAYPAL+TRANSFER',
          description: 'Instant PayPal transfer service. Fast and secure money transfers to any PayPal account.',
          stock: 50,
          alt: 'PayPal Transfer'
        },
        {
          id: 'TR002',
          name: 'CashApp Transfer - Premium',
          category: 'TRANSFERS',
          price: 180.00,
          image: 'https://via.placeholder.com/300x200/00D632/ffffff?text=CASHAPP+TRANSFER',
          description: 'Premium CashApp transfer service. Instant transfers with high success rate.',
          stock: 45,
          alt: 'CashApp Transfer'
        },
        {
          id: 'TR003',
          name: 'Venmo Transfer - Social',
          category: 'TRANSFERS',
          price: 160.00,
          image: 'https://via.placeholder.com/300x200/008CFF/ffffff?text=VENMO+TRANSFER',
          description: 'Venmo transfer service for social payments. Quick and reliable transfers.',
          stock: 40,
          alt: 'Venmo Transfer'
        },
        {
          id: 'TR004',
          name: 'Zelle Transfer - Banking',
          category: 'TRANSFERS',
          price: 220.00,
          image: 'https://via.placeholder.com/300x200/0066CC/ffffff?text=ZELLE+TRANSFER',
          description: 'Zelle banking transfer service. Direct bank-to-bank transfers with instant processing.',
          stock: 35,
          alt: 'Zelle Transfer'
        },
        {
          id: 'TR005',
          name: 'GooglePay Transfer - Android',
          category: 'TRANSFERS',
          price: 170.00,
          image: 'https://via.placeholder.com/300x200/4285F4/ffffff?text=GOOGLE+PAY+TRANSFER',
          description: 'Google Pay transfer service for Android users. Seamless mobile payment transfers.',
          stock: 30,
          alt: 'GooglePay Transfer'
        },

        // Category Products (from all category components)
        {
          id: 'BL001',
          name: 'Premium Bank Log - Chase Bank',
          category: 'BANK LOGS',
          price: 500.00,
          image: 'https://via.placeholder.com/300x200/0066cc/ffffff?text=PREMIUM+BANK',
          description: 'Premium Chase Bank log with high balance and full access. Complete banking credentials included.',
          stock: 10,
          alt: 'Premium Bank Log'
        },
        {
          id: 'BL002',
          name: 'Wells Fargo Bank Log - Verified',
          category: 'BANK LOGS',
          price: 450.00,
          image: 'https://via.placeholder.com/300x200/DC143C/ffffff?text=WELLS+FARGO',
          description: 'Verified Wells Fargo bank log with complete access. High balance account with full credentials.',
          stock: 8,
          alt: 'Wells Fargo Bank Log'
        },
        {
          id: 'BL003',
          name: 'Bank of America Log - Premium',
          category: 'BANK LOGS',
          price: 480.00,
          image: 'https://via.placeholder.com/300x200/FF0000/ffffff?text=BANK+OF+AMERICA',
          description: 'Premium Bank of America log with high limits. Complete banking access and credentials.',
          stock: 12,
          alt: 'Bank of America Log'
        },

        // CC & CVV Products
        {
          id: 'CC001',
          name: 'USA VISA [CREDIT] | $8000+ Balance',
          category: 'CC & CVV',
          price: 600.00,
          image: 'https://via.placeholder.com/300x200/1A1F71/ffffff?text=USA+VISA+CREDIT',
          description: 'High-value USA Visa credit card with $8000+ balance. Includes CVV, PIN, and full details.',
          stock: 6,
          alt: 'USA VISA Credit Card'
        },
        {
          id: 'CC002',
          name: 'UK MASTERCARD [DEBIT] | £4000+ Balance',
          category: 'CC & CVV',
          price: 400.00,
          image: 'https://via.placeholder.com/300x200/EB001B/ffffff?text=UK+MASTERCARD',
          description: 'UK Mastercard debit with £4000+ balance. Complete card details and PIN included.',
          stock: 9,
          alt: 'UK Mastercard Debit'
        },
        {
          id: 'CC003',
          name: 'Canada VISA [CREDIT] | $6000+ CAD Balance',
          category: 'CC & CVV',
          price: 500.00,
          image: 'https://via.placeholder.com/300x200/1A1F71/ffffff?text=CANADA+VISA',
          description: 'Canadian Visa credit card with $6000+ CAD balance. Full card details and security info.',
          stock: 7,
          alt: 'Canada VISA Credit'
        },

        // Stealth Accounts
        {
          id: 'SA001',
          name: 'Amazon Stealth Account - Verified',
          category: 'STEALTH ACCOUNTS',
          price: 150.00,
          image: 'https://via.placeholder.com/300x200/ff9900/ffffff?text=AMAZON+STEALTH',
          description: 'Verified Amazon stealth account with Prime access. Clean history and full account access.',
          stock: 25,
          alt: 'Amazon Stealth Account'
        },
        {
          id: 'SA002',
          name: 'eBay Stealth Account - Premium',
          category: 'STEALTH ACCOUNTS',
          price: 120.00,
          image: 'https://via.placeholder.com/300x200/86B817/ffffff?text=EBAY+STEALTH',
          description: 'Premium eBay stealth account with high seller rating. Complete account access included.',
          stock: 20,
          alt: 'eBay Stealth Account'
        },
        {
          id: 'SA003',
          name: 'Netflix Stealth Account - 4K',
          category: 'STEALTH ACCOUNTS',
          price: 80.00,
          image: 'https://via.placeholder.com/300x200/E50914/ffffff?text=NETFLIX+STEALTH',
          description: 'Netflix stealth account with 4K streaming. Premium plan with multiple profiles.',
          stock: 35,
          alt: 'Netflix Stealth Account'
        },

        // Fullz
        {
          id: 'FZ001',
          name: 'USA FULLZ - Complete Package',
          category: 'FULLZ',
          price: 300.00,
          image: 'https://via.placeholder.com/300x200/000080/ffffff?text=USA+FULLZ',
          description: 'Complete USA fullz package with SSN, DOB, address, and banking information.',
          stock: 15,
          alt: 'USA FULLZ Package'
        },
        {
          id: 'FZ002',
          name: 'UK FULLZ - Premium Data',
          category: 'FULLZ',
          price: 350.00,
          image: 'https://via.placeholder.com/300x200/012169/ffffff?text=UK+FULLZ',
          description: 'Premium UK fullz with complete personal and financial data. High-quality information.',
          stock: 12,
          alt: 'UK FULLZ Package'
        },

        // Tools
        {
          id: 'TL001',
          name: 'Carding Software - Professional',
          category: 'TOOLS',
          price: 400.00,
          image: 'https://via.placeholder.com/300x200/000000/ffffff?text=CARDING+SOFTWARE',
          description: 'Professional carding software with advanced features. Latest version with full support.',
          stock: 8,
          alt: 'Carding Software'
        },
        {
          id: 'TL002',
          name: 'SMS Bypass Tool - Premium',
          category: 'TOOLS',
          price: 250.00,
          image: 'https://via.placeholder.com/300x200/00FF00/ffffff?text=SMS+BYPASS',
          description: 'Premium SMS bypass tool for 2FA verification. Works with all major platforms.',
          stock: 15,
          alt: 'SMS Bypass Tool'
        },

        // E-Gift Cards
        {
          id: 'EG001',
          name: 'Amazon Gift Card - $500',
          category: 'E-GIFT CARDS',
          price: 450.00,
          image: 'https://via.placeholder.com/300x200/ff9900/ffffff?text=AMAZON+$500',
          description: 'Amazon e-gift card worth $500. Instant delivery and immediate use.',
          stock: 30,
          alt: 'Amazon Gift Card'
        },
        {
          id: 'EG002',
          name: 'Walmart Gift Card - $300',
          category: 'E-GIFT CARDS',
          price: 270.00,
          image: 'https://via.placeholder.com/300x200/0071CE/ffffff?text=WALMART+$300',
          description: 'Walmart e-gift card worth $300. Digital delivery and store-wide acceptance.',
          stock: 25,
          alt: 'Walmart Gift Card'
        },

        // Deposit Checks
        {
          id: 'DC001',
          name: 'Mobile Deposit Check - $2000',
          category: 'DEPOSIT CHECKS',
          price: 1800.00,
          image: 'https://via.placeholder.com/300x200/0066CC/ffffff?text=CHECK+$2000',
          description: 'Mobile deposit check worth $2000. High-quality check for mobile banking apps.',
          stock: 10,
          alt: 'Mobile Deposit Check'
        },
        {
          id: 'DC002',
          name: 'Bank Deposit Check - $1500',
          category: 'DEPOSIT CHECKS',
          price: 1350.00,
          image: 'https://via.placeholder.com/300x200/0066CC/ffffff?text=CHECK+$1500',
          description: 'Bank deposit check worth $1500. Professional check for traditional banking.',
          stock: 15,
          alt: 'Bank Deposit Check'
        },

        // Clones
        {
          id: 'CL001',
          name: 'iPhone Clone - Latest Model',
          category: 'CLONES',
          price: 800.00,
          image: 'https://via.placeholder.com/300x200/000000/ffffff?text=IPHONE+CLONE',
          description: 'Latest iPhone clone with all features. Perfect replica with full functionality.',
          stock: 5,
          alt: 'iPhone Clone'
        },
        {
          id: 'CL002',
          name: 'Samsung Clone - Premium',
          category: 'CLONES',
          price: 600.00,
          image: 'https://via.placeholder.com/300x200/1428A0/ffffff?text=SAMSUNG+CLONE',
          description: 'Premium Samsung clone with advanced features. High-quality replica device.',
          stock: 8,
          alt: 'Samsung Clone'
        },

        // Carded Products
        {
          id: 'CP001',
          name: 'Carded iPhone - Unlocked',
          category: 'CARDED PRODUCTS',
          price: 1200.00,
          image: 'https://via.placeholder.com/300x200/000000/ffffff?text=CARDED+IPHONE',
          description: 'Carded iPhone with unlocked status. Purchased with verified payment method.',
          stock: 3,
          alt: 'Carded iPhone'
        },
        {
          id: 'CP002',
          name: 'Carded MacBook - Pro Model',
          category: 'CARDED PRODUCTS',
          price: 2500.00,
          image: 'https://via.placeholder.com/300x200/000000/ffffff?text=CARDED+MACBOOK',
          description: 'Carded MacBook Pro with premium specifications. High-end laptop with warranty.',
          stock: 2,
          alt: 'Carded MacBook'
        },

        // Spamming
        {
          id: 'SP001',
          name: 'Email Spam Tool - Professional',
          category: 'SPAMMING',
          price: 300.00,
          image: 'https://via.placeholder.com/300x200/FF0000/ffffff?text=EMAIL+SPAM',
          description: 'Professional email spam tool with advanced features. High delivery rate guaranteed.',
          stock: 12,
          alt: 'Email Spam Tool'
        },
        {
          id: 'SP002',
          name: 'SMS Spam Service - Premium',
          category: 'SPAMMING',
          price: 200.00,
          image: 'https://via.placeholder.com/300x200/00FF00/ffffff?text=SMS+SPAM',
          description: 'Premium SMS spam service with high success rate. Bulk messaging capabilities.',
          stock: 18,
          alt: 'SMS Spam Service'
        },

        // Bitcoin Log
        {
          id: 'BTC001',
          name: 'Bitcoin Wallet Log - 2.5 BTC',
          category: 'BITCOIN LOG',
          price: 75000.00,
          image: 'https://via.placeholder.com/300x200/F7931A/ffffff?text=BITCOIN+WALLET',
          description: 'Bitcoin wallet log with 2.5 BTC balance. Complete wallet access and credentials.',
          stock: 1,
          alt: 'Bitcoin Wallet Log'
        },
        {
          id: 'BTC002',
          name: 'Bitcoin Exchange Log - Verified',
          category: 'BITCOIN LOG',
          price: 500.00,
          image: 'https://via.placeholder.com/300x200/F7931A/ffffff?text=BITCOIN+EXCHANGE',
          description: 'Verified Bitcoin exchange log with trading access. Complete account credentials.',
          stock: 8,
          alt: 'Bitcoin Exchange Log'
        }
      ];

      const foundProduct = mockProducts.find(p => p.id === productId);
      
      if (foundProduct) {
        this.product = foundProduct;
        this.loading = false;
      } else {
        this.error = 'Product not found';
        this.loading = false;
      }
    }, 500);
  }

  increaseQuantity() {
    if (this.product && this.quantity < this.product.stock) {
      this.quantity++;
    }
  }

  decreaseQuantity() {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }

  addToCart() {
    if (!this.product) return;

    const cartItem = {
      id: this.product.id,
      name: this.product.name,
      price: this.product.price,
      quantity: this.quantity,
      image: this.product.image
    };

    // Get existing cart from localStorage
    let cart = JSON.parse(localStorage.getItem('cart') || '[]');
    
    // Check if item already exists in cart
    const existingItemIndex = cart.findIndex((item: any) => item.id === this.product!.id);
    
    if (existingItemIndex > -1) {
      // Update quantity if item exists
      cart[existingItemIndex].quantity += this.quantity;
      this.toastService.success(`Quantity updated for ${this.product.name.substring(0, 20)}${this.product.name.length > 20 ? '...' : ''}`);
    } else {
      // Add new item
      cart.push(cartItem);
      this.toastService.success(`${this.product.name.substring(0, 20)}${this.product.name.length > 20 ? '...' : ''} added to cart!`);
    }

    // Save back to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));

    // Dispatch custom event to update header cart count
    window.dispatchEvent(new CustomEvent('cartUpdated', {
      detail: { cartCount: cart.length }
    }));
  }

  get totalPrice(): number {
    return this.product ? this.product.price * this.quantity : 0;
  }
}
