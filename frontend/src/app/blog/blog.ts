import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-blog',
  imports: [RouterModule, CommonModule],
  templateUrl: './blog.html',
  styleUrl: './blog.css'
})
export class Blog {
  // Blog articles data
  blogArticles = [
    {
      id: 1,
      title: 'How to obtain Cashapp Linkables',
      category: 'CARDING',
      image: 'https://lh3.googleusercontent.com/d/1IopXy5asb5nzhPJuaGDaAunIbOiSMKF1',
      alt: 'how to obtain cashapp linkables',
      readTime: '14 min',
      date: '1 year ago',
      url: '/blog/how-to-obtain-cashapp-linkables'
    },
    {
      id: 2,
      title: 'How to card on Amazon using Linkable Reload Cards',
      category: 'CARDING',
      image: 'https://lh3.googleusercontent.com/d/1u82yMbyjPh00bVd_Wjcrvw7a6XBVMbeq',
      alt: 'how to card on amazon using linkable reload cards',
      readTime: '13 min',
      date: '1 year ago',
      url: '/blog/how-to-card-on-amazon-using-linkable-reload-cards'
    },
    {
      id: 3,
      title: 'What are Cashapp Linkables and how to make Instant Cashout',
      category: 'CARDING',
      image: 'https://lh3.googleusercontent.com/d/1az_GXzu9QsB0v_C9ePp72sgGWVEaS_XL',
      alt: 'what are cashapp linkables and how to make instant cashout',
      readTime: '13 min',
      date: '1 year ago',
      url: '/blog/what-are-cashapp-linkables-and-how-to-make-instant-cashout'
    },
    {
      id: 4,
      title: 'PayPal Logs - PayPal Linkables - PayPal Transfers',
      category: 'CARDING',
      image: 'https://lh3.googleusercontent.com/d/1rA-DTKq23qDB8giHRiD_PKGczPNHNOQ4',
      alt: 'paypal logs - paypal linkables - paypal transfers',
      readTime: '11 min',
      date: '1 year ago',
      url: '/blog/paypal-logs-paypal-linkables-paypal-transfers'
    },
    {
      id: 5,
      title: 'How to send money with ApplePay Linkables',
      category: 'CARDING',
      image: 'https://lh3.googleusercontent.com/d/1QvZlHB3ZG_9tm-2I_Nr_s0GTKaHC4aI7',
      alt: 'how to send money with applepay linkables',
      readTime: '12 min',
      date: '1 year ago',
      url: '/blog/how-to-send-money-with-applepay-linkables'
    },
    {
      id: 6,
      title: 'How to get Money on Cashapp Logs',
      category: 'CARDING',
      image: 'https://lh3.googleusercontent.com/d/1avJTSDGmugqbkdNhWYcbYZoF3-MHYi7T',
      alt: 'how to get money on cashapp logs',
      readTime: '13 min',
      date: '1 year ago',
      url: '/blog/how-to-get-money-on-cashapp-logs'
    },
    {
      id: 7,
      title: 'How to Cashout Linkables in 2024 via PayPal, CashApp and ApplePay',
      category: 'CARDING',
      image: 'https://lh3.googleusercontent.com/d/1yUijacAkfvrQhA1Cvl_EeK2EFjlSPs3r',
      alt: 'how to cashout linkables in 2024 via paypal, cashapp and applepay',
      readTime: '5 min',
      date: '1 year ago',
      url: '/blog/how-to-cashout-linkables-in-2024-via-paypal-cashapp-and-applepay'
    },
    {
      id: 8,
      title: 'HOW TO CASHOUT BITCOIN VIA PAYPAL',
      category: 'CARDING',
      image: 'https://lh3.googleusercontent.com/d/1OIcweKTzGQi8pi6kZJn40qhd_vs1BgRz',
      alt: 'how to cashout bitcoin via paypal',
      readTime: '12 min',
      date: '1 year ago',
      url: '/blog/how-to-cashout-bitcoin-via-paypal'
    },
    {
      id: 9,
      title: 'APPLEPAY NON VBV CARD (LINKABLES) CASHOUT',
      category: 'CARDING',
      image: 'https://lh3.googleusercontent.com/d/18uMOv0AINUoJCt_DRd1ACggegdwpgmf-',
      alt: 'applepay non vbv card (linkables) cashout',
      readTime: '13 min',
      date: '1 year ago',
      url: '/blog/applepay-non-vbv-card-linkables-cashout'
    },
    {
      id: 10,
      title: 'HOW TO USE CRYPTO WALLET HACKING SOFTWARE',
      category: 'CARDING',
      image: 'https://lh3.googleusercontent.com/d/1xLoXiN8W-SnYcAcJCkcc0fk4hE8X7wLy',
      alt: 'how to use crypto wallet hacking software',
      readTime: '5 min',
      date: '1 year ago',
      url: '/blog/how-to-use-crypto-wallet-hacking-software'
    },
    {
      id: 11,
      title: 'ANONYMOUS PAYAL LOGIN AND CASHOUT SAUCE',
      category: 'CARDING',
      image: 'https://lh3.googleusercontent.com/d/1uoclfo4m6McePmOjhKOvOu_oJDRwFU7n',
      alt: 'anonymous payal login and cashout sauce',
      readTime: '7 min',
      date: '1 year ago',
      url: '/blog/anonymous-payal-login-and-cashout-sauce'
    },
    {
      id: 12,
      title: 'CANADA BANK LOG ETRANSFER CASHOUT',
      category: 'CARDING',
      image: 'https://lh3.googleusercontent.com/d/1ZXC_1V1wejl4kBKuki-jgKCHJ28asX4g',
      alt: 'canada bank log etransfer cashout',
      readTime: '10 min',
      date: '1 year ago',
      url: '/blog/canada-bank-log-etransfer-cashout'
    }
  ];

  // Pagination
  currentPage = 1;
  itemsPerPage = 12;
  totalPages = 4;

  constructor(private router: Router) {}

  // Get current page articles
  get currentPageArticles() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.blogArticles.slice(startIndex, endIndex);
  }

  // Navigate to specific page
  goToPage(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
    }
  }

  // Navigate to previous page
  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  // Navigate to next page
  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }

  // Get page numbers for pagination
  get pageNumbers() {
    const pages = [];
    for (let i = 1; i <= this.totalPages; i++) {
      pages.push(i);
    }
    return pages;
  }

  // View article details
  viewArticle(article: any) {
    console.log('Viewing article:', article);
    // Navigate to article details page
    this.router.navigate([article.url]);
  }
}
