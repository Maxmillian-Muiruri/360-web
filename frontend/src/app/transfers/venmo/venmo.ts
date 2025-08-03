import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from '../../shared/sidebar/sidebar';

@Component({
  selector: 'app-venmo',
  imports: [RouterModule, CommonModule, SidebarComponent],
  templateUrl: './venmo.html',
  styleUrl: './venmo.css'
})
export class Venmo {
  products = [
    {
      id: 'VENMO_TRANSFER001',
      name: 'Venmo Transfer - $300 USD',
      category: 'TRANSFERS',
      price: 60.00,
      image: 'https://via.placeholder.com/300x200/008CFF/ffffff?text=VENMO+$300',
      alt: 'Venmo $300 Transfer',
      amount: '$300 USD',
      speed: 'Instant',
      country: 'USA'
    },
    {
      id: 'VENMO_TRANSFER002',
      name: 'Venmo Transfer - $600 USD',
      category: 'TRANSFERS',
      price: 110.00,
      image: 'https://via.placeholder.com/300x200/008CFF/ffffff?text=VENMO+$600',
      alt: 'Venmo $600 Transfer',
      amount: '$600 USD',
      speed: 'Instant',
      country: 'USA'
    },
    {
      id: 'VENMO_TRANSFER003',
      name: 'Venmo Transfer - $1200 USD',
      category: 'TRANSFERS',
      price: 200.00,
      image: 'https://via.placeholder.com/300x200/008CFF/ffffff?text=VENMO+$1200',
      alt: 'Venmo $1200 Transfer',
      amount: '$1200 USD',
      speed: '1-2 Hours',
      country: 'USA'
    },
    {
      id: 'VENMO_TRANSFER004',
      name: 'Venmo Transfer - $200 USD',
      category: 'TRANSFERS',
      price: 40.00,
      image: 'https://via.placeholder.com/300x200/008CFF/ffffff?text=VENMO+$200',
      alt: 'Venmo $200 Transfer',
      amount: '$200 USD',
      speed: 'Instant',
      country: 'USA'
    },
    {
      id: 'VENMO_TRANSFER005',
      name: 'Venmo Transfer - $900 USD',
      category: 'TRANSFERS',
      price: 160.00,
      image: 'https://via.placeholder.com/300x200/008CFF/ffffff?text=VENMO+$900',
      alt: 'Venmo $900 Transfer',
      amount: '$900 USD',
      speed: 'Same Day',
      country: 'USA'
    }
  ];

  constructor(private router: Router) {}

  viewProduct(product: any) {
    this.router.navigate(['/product', product.id]);
  }
}
