import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from '../../shared/sidebar/sidebar';

@Component({
  selector: 'app-fullz',
  imports: [RouterModule, CommonModule, SidebarComponent],
  templateUrl: './fullz.html',
  styleUrl: './fullz.css'
})
export class Fullz {
  // Fullz products data
  products = [
    {
      id: 'USA001',
      name: 'USA Fullz - Complete Personal Information',
      category: 'FULLZ',
      price: 180.00,
      image: 'https://via.placeholder.com/300x200/cc0000/ffffff?text=USA+FULLZ',
      alt: 'USA Fullz Complete',
      region: 'USA',
      completeness: 'Complete',
      includes: ['SSN', 'DOB', 'Address', 'Phone', 'Email', 'Bank Info'],
      dataPoints: 8
    },
    {
      id: 'UK001',
      name: 'UK Fullz - Premium Personal Data',
      category: 'FULLZ',
      price: 220.00,
      image: 'https://via.placeholder.com/300x200/0066cc/ffffff?text=UK+FULLZ',
      alt: 'UK Fullz Premium',
      region: 'UK',
      completeness: 'Premium',
      includes: ['NIN', 'DOB', 'Address', 'Phone', 'Email', 'Bank Details'],
      dataPoints: 9
    },
    {
      id: 'CAN001',
      name: 'Canada Fullz - Complete Profile',
      category: 'FULLZ',
      price: 200.00,
      image: 'https://via.placeholder.com/300x200/ff6600/ffffff?text=CANADA+FULLZ',
      alt: 'Canada Fullz Complete',
      region: 'Canada',
      completeness: 'Complete',
      includes: ['SIN', 'DOB', 'Address', 'Phone', 'Email', 'Bank Info'],
      dataPoints: 8
    },
    {
      id: 'EU001',
      name: 'European Fullz - Multi-Country Data',
      category: 'FULLZ',
      price: 250.00,
      image: 'https://via.placeholder.com/300x200/0066cc/ffffff?text=EU+FULLZ',
      alt: 'European Fullz',
      region: 'Europe',
      completeness: 'Premium',
      includes: ['National ID', 'DOB', 'Address', 'Phone', 'Email', 'Bank Info'],
      dataPoints: 10
    },
    {
      id: 'AUS001',
      name: 'Australia Fullz - Complete Profile',
      category: 'FULLZ',
      price: 230.00,
      image: 'https://via.placeholder.com/300x200/cc0000/ffffff?text=AUSTRALIA+FULLZ',
      alt: 'Australia Fullz',
      region: 'Australia',
      completeness: 'Complete',
      includes: ['TFN', 'DOB', 'Address', 'Phone', 'Email', 'Bank Info'],
      dataPoints: 8
    },
    {
      id: 'AFRICA001',
      name: 'Africa Fullz - Regional Data',
      category: 'FULLZ',
      price: 150.00,
      image: 'https://via.placeholder.com/300x200/ff6600/ffffff?text=AFRICA+FULLZ',
      alt: 'Africa Fullz',
      region: 'Africa',
      completeness: 'Standard',
      includes: ['National ID', 'DOB', 'Address', 'Phone', 'Email'],
      dataPoints: 6
    }
  ];

  constructor(private router: Router) {}

  // View product details - navigate to product page
  viewProduct(product: any) {
    console.log('Viewing fullz:', product);
    // Navigate to product details page with product ID
    this.router.navigate(['/product', product.id]);
  }
}
