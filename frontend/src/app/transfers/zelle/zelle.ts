import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from '../../shared/sidebar/sidebar';

@Component({
  selector: 'app-zelle',
  imports: [RouterModule, CommonModule, SidebarComponent],
  templateUrl: './zelle.html',
  styleUrl: './zelle.css'
})
export class Zelle {
  products = [
    {
      id: 'ZELLE_TRANSFER001',
      name: 'Zelle Transfer - $500 USD',
      category: 'TRANSFERS',
      price: 90.00,
      image: 'https://via.placeholder.com/300x200/6B4EFF/ffffff?text=ZELLE+$500',
      alt: 'Zelle $500 Transfer',
      amount: '$500 USD',
      speed: 'Instant',
      country: 'USA'
    },
    {
      id: 'ZELLE_TRANSFER002',
      name: 'Zelle Transfer - $1000 USD',
      category: 'TRANSFERS',
      price: 170.00,
      image: 'https://via.placeholder.com/300x200/6B4EFF/ffffff?text=ZELLE+$1000',
      alt: 'Zelle $1000 Transfer',
      amount: '$1000 USD',
      speed: 'Instant',
      country: 'USA'
    },
    {
      id: 'ZELLE_TRANSFER003',
      name: 'Zelle Transfer - $2000 USD',
      category: 'TRANSFERS',
      price: 320.00,
      image: 'https://via.placeholder.com/300x200/6B4EFF/ffffff?text=ZELLE+$2000',
      alt: 'Zelle $2000 Transfer',
      amount: '$2000 USD',
      speed: '1-2 Hours',
      country: 'USA'
    },
    {
      id: 'ZELLE_TRANSFER004',
      name: 'Zelle Transfer - $300 USD',
      category: 'TRANSFERS',
      price: 60.00,
      image: 'https://via.placeholder.com/300x200/6B4EFF/ffffff?text=ZELLE+$300',
      alt: 'Zelle $300 Transfer',
      amount: '$300 USD',
      speed: 'Instant',
      country: 'USA'
    },
    {
      id: 'ZELLE_TRANSFER005',
      name: 'Zelle Transfer - $750 USD',
      category: 'TRANSFERS',
      price: 130.00,
      image: 'https://via.placeholder.com/300x200/6B4EFF/ffffff?text=ZELLE+$750',
      alt: 'Zelle $750 Transfer',
      amount: '$750 USD',
      speed: 'Instant',
      country: 'USA'
    },
    {
      id: 'ZELLE_TRANSFER006',
      name: 'Zelle Transfer - $1500 USD',
      category: 'TRANSFERS',
      price: 250.00,
      image: 'https://via.placeholder.com/300x200/6B4EFF/ffffff?text=ZELLE+$1500',
      alt: 'Zelle $1500 Transfer',
      amount: '$1500 USD',
      speed: 'Same Day',
      country: 'USA'
    }
  ];

  constructor(private router: Router) {}

  viewProduct(product: any) {
    this.router.navigate(['/product', product.id]);
  }
}
