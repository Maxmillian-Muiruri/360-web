import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface BlogArticle {
  id: string;
  title: string;
  content: string;
  excerpt: string;
  category: string;
  image: string;
  alt: string;
  readTime: string;
  author: string;
  publishedAt: string;
  updatedAt: string;
  slug: string;
  tags: string[];
  isPublished: boolean;
}

export interface BlogFilters {
  category?: string;
  search?: string;
  author?: string;
  tags?: string[];
}

export interface BlogResponse {
  articles: BlogArticle[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private readonly API_URL = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {}

  // Get all blog articles with pagination and filters
  getArticles(
    page: number = 1,
    limit: number = 12,
    filters?: BlogFilters
  ): Observable<BlogResponse> {
    let params = new HttpParams()
      .set('page', page.toString())
      .set('limit', limit.toString());

    if (filters) {
      if (filters.category) params = params.set('category', filters.category);
      if (filters.search) params = params.set('search', filters.search);
      if (filters.author) params = params.set('author', filters.author);
      if (filters.tags && filters.tags.length > 0) {
        filters.tags.forEach(tag => {
          params = params.append('tags', tag);
        });
      }
    }

    return this.http.get<BlogResponse>(`${this.API_URL}/blog`, { params });
  }

  // Get a single article by ID or slug
  getArticle(idOrSlug: string): Observable<BlogArticle> {
    return this.http.get<BlogArticle>(`${this.API_URL}/blog/${idOrSlug}`);
  }

  // Get articles by category
  getArticlesByCategory(category: string, page: number = 1, limit: number = 12): Observable<BlogResponse> {
    return this.getArticles(page, limit, { category });
  }

  // Search articles
  searchArticles(query: string, page: number = 1, limit: number = 12): Observable<BlogResponse> {
    return this.getArticles(page, limit, { search: query });
  }

  // Get featured articles
  getFeaturedArticles(limit: number = 6): Observable<BlogArticle[]> {
    return this.http.get<BlogArticle[]>(`${this.API_URL}/blog/featured?limit=${limit}`);
  }

  // Get recent articles
  getRecentArticles(limit: number = 5): Observable<BlogArticle[]> {
    return this.http.get<BlogArticle[]>(`${this.API_URL}/blog/recent?limit=${limit}`);
  }

  // Get article categories
  getCategories(): Observable<{ name: string; count: number }[]> {
    return this.http.get<{ name: string; count: number }[]>(`${this.API_URL}/blog/categories`);
  }

  // Get article tags
  getTags(): Observable<{ name: string; count: number }[]> {
    return this.http.get<{ name: string; count: number }[]>(`${this.API_URL}/blog/tags`);
  }

  // Create article (Admin only)
  createArticle(articleData: Partial<BlogArticle>): Observable<BlogArticle> {
    return this.http.post<BlogArticle>(`${this.API_URL}/blog`, articleData);
  }

  // Update article (Admin only)
  updateArticle(id: string, articleData: Partial<BlogArticle>): Observable<BlogArticle> {
    return this.http.patch<BlogArticle>(`${this.API_URL}/blog/${id}`, articleData);
  }

  // Delete article (Admin only)
  deleteArticle(id: string): Observable<{ message: string }> {
    return this.http.delete<{ message: string }>(`${this.API_URL}/blog/${id}`);
  }

  // Publish/Unpublish article (Admin only)
  togglePublishStatus(id: string, isPublished: boolean): Observable<BlogArticle> {
    return this.http.patch<BlogArticle>(`${this.API_URL}/blog/${id}/publish`, { isPublished });
  }
}
