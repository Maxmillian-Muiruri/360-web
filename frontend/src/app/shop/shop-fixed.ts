import { Component, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductService, Product } from '../service/product/product.service';
import { CategoryService, Category } from '../service/category/category.service';
import { ToastService } from '../services/toast.service';

@Component({
  selector: 'app-shop',
  imports: [RouterModule, CommonModule],
  templateUrl: './shop.html',
  styleUrl: './shop.css'
})
export class ShopComponent implements OnInit {
  products: Product[] = [];
  filteredProducts: Product[] = [];
  categories: Category[] = [];
  selectedCategory = '';
  searchTerm = '';
  loading = false;
  currentPage = 1;
  pageSize = 20;
  total = 0;
  totalPages = 0;

  constructor(
    private router: Router,
    private productService: ProductService,
    private categoryService: CategoryService,
    private toastService: ToastService
  ) {}

  ngOnInit() {
    this.loadCategories();
    this.loadProducts();
  }

  loadCategories() {
    // Load categories from backend API using CategoryService
    this.categoryService.getActiveCategories().subscribe({
      next: (categories) => {
        this.categories = categories;
      },
      error: (error) => {
        console.error('Error loading categories:', error);
        this.toastService.error('Failed to load categories');
        this.categories = [];
      }
    });
  }

  loadProducts() {
    this.loading = true;
    const filters: any = { isActive: true };
    
    if (this.selectedCategory) {
      filters.categoryId = this.selectedCategory;
    }
    if (this.searchTerm) {
      filters.search = this.searchTerm;
    }

    this.productService.getProducts(this.currentPage, this.pageSize, filters).subscribe({
      next: (response) => {
        this.products = response.products;
        this.filteredProducts = response.products;
        this.total = response.total;
        this.totalPages = response.totalPages;
        this.loading = false;
      },
      error: (error) => {
        console.error('Error loading products:', error);
        this.toastService.error('Failed to load products');
        this.loading = false;
      }
    });
  }

  onCategoryChange() {
    this.currentPage = 1;
    this.loadProducts();
  }

  onSearch() {
    this.currentPage = 1;
    this.loadProducts();
  }

  clearFilters() {
    this.selectedCategory = '';
    this.searchTerm = '';
    this.currentPage = 1;
    this.loadProducts();
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.loadProducts();
    }
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.loadProducts();
    }
  }

  goToProduct(productId: string) {
    this.router.navigate(['/product', productId]);
  }

  addToCart(product: Product) {
    // Here you would integrate with your cart service
    this.toastService.success(`Added ${product.name} to cart`);
    // this.cartService.addToCart(product, 1);
  }

  getProductImage(product: Product): string {
    return product.image || 'https://via.placeholder.com/300x200/cccccc/666666?text=No+Image';
  }

  getProductPrice(product: Product): string {
    return `$${product.price.toFixed(2)}`;
  }

  isInStock(product: Product): boolean {
    return product.stockQuantity > 0;
  }

  getStockStatus(product: Product): string {
    if (product.stockQuantity > 10) return 'In Stock';
    if (product.stockQuantity > 0) return `Only ${product.stockQuantity} left`;
    return 'Out of Stock';
  }

  getStockStatusClass(product: Product): string {
    if (product.stockQuantity > 10) return 'text-green-600';
    if (product.stockQuantity > 0) return 'text-yellow-600';
    return 'text-red-600';
  }
} 