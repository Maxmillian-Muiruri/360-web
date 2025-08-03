import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

// Interfaces for type safety
export interface User {
  id: string;
  username: string;
  email: string;
  role: 'user' | 'admin' | 'super_admin';
  isActive: boolean;
  createdAt?: string;
}

export interface LoginRequest {
  username: string;
  password: string;
}

export interface LoginResponse {
  token: string;
  user: User;
  message?: string;
}

export interface RegisterRequest {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSubject = new BehaviorSubject<User | null>(null);
  public currentUser$ = this.currentUserSubject.asObservable();

  private readonly API_URL = 'http://localhost:3000/api'; // Update with your backend URL
  private readonly TOKEN_KEY = 'auth_token';
  private readonly USER_KEY = 'user_info';

  constructor(
    private http: HttpClient,
    private router: Router
  ) {
    // Check for existing user session on service initialization
    this.checkAuthStatus();
  }

  // Get current user synchronously
  get currentUser(): User | null {
    return this.currentUserSubject.value;
  }

  // Check if user is authenticated
  get isAuthenticated(): boolean {
    return !!this.getToken();
  }

  // Check if user is admin
  get isAdmin(): boolean {
    const user = this.currentUser;
    return user ? (user.role === 'admin' || user.role === 'super_admin') : false;
  }

  // Check if user is super admin
  get isSuperAdmin(): boolean {
    const user = this.currentUser;
    return user ? user.role === 'super_admin' : false;
  }

  // Login method with role detection
  login(credentials: LoginRequest): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.API_URL}/auth/login`, credentials)
      .pipe(
        tap(response => {
          // Store token and user info
          this.setToken(response.token);
          this.setUser(response.user);
          this.currentUserSubject.next(response.user);
        }),
        catchError(error => {
          console.error('Login error:', error);
          throw error;
        })
      );
  }

  // Register method
  register(userData: RegisterRequest): Observable<any> {
    return this.http.post(`${this.API_URL}/auth/register`, userData)
      .pipe(
        tap(response => {
          console.log('Registration successful:', response);
        }),
        catchError(error => {
          console.error('Registration error:', error);
          throw error;
        })
      );
  }

  // Logout method
  logout(): void {
    // Clear stored data
    this.clearAuthData();
    this.currentUserSubject.next(null);
    
    // Redirect to login page
    this.router.navigate(['/login']);
  }

  // Check authentication status on app startup
  private checkAuthStatus(): void {
    const token = this.getToken();
    const user = this.getStoredUser();
    
    if (token && user) {
      // Verify token with backend (optional)
      this.verifyToken(token).subscribe({
        next: (response) => {
          this.currentUserSubject.next(response.user);
        },
        error: () => {
          // Token is invalid, clear data
          this.clearAuthData();
        }
      });
    }
  }

  // Verify token with backend
  private verifyToken(token: string): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.API_URL}/auth/verify`, { token })
      .pipe(
        catchError(error => {
          console.error('Token verification failed:', error);
          throw error;
        })
      );
  }

  // Token management
  private setToken(token: string): void {
    localStorage.setItem(this.TOKEN_KEY, token);
  }

  private getToken(): string | null {
    return localStorage.getItem(this.TOKEN_KEY);
  }

  private clearToken(): void {
    localStorage.removeItem(this.TOKEN_KEY);
  }

  // User data management
  private setUser(user: User): void {
    localStorage.setItem(this.USER_KEY, JSON.stringify(user));
  }

  private getStoredUser(): User | null {
    const userStr = localStorage.getItem(this.USER_KEY);
    return userStr ? JSON.parse(userStr) : null;
  }

  private clearUser(): void {
    localStorage.removeItem(this.USER_KEY);
  }

  // Clear all auth data
  private clearAuthData(): void {
    this.clearToken();
    this.clearUser();
  }

  // Get auth headers for API requests
  getAuthHeaders(): { [key: string]: string } {
    const token = this.getToken();
    return token ? { 'Authorization': `Bearer ${token}` } : {};
  }

  // Handle login response and redirect based on role
  handleLoginResponse(response: LoginResponse): void {
    const user = response.user;
    
    if (user.role === 'admin' || user.role === 'super_admin') {
      // Redirect admin to admin dashboard
      this.router.navigate(['/admin/dashboard']);
    } else {
      // Redirect regular user to home page
      this.router.navigate(['/home']);
    }
  }

  // Refresh user data (useful for admin operations)
  refreshUserData(): Observable<User> {
    return this.http.get<User>(`${this.API_URL}/auth/profile`)
      .pipe(
        tap(user => {
          this.setUser(user);
          this.currentUserSubject.next(user);
        }),
        catchError(error => {
          console.error('Failed to refresh user data:', error);
          throw error;
        })
      );
  }
} 