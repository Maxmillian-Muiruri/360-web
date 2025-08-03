import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService, LoginRequest } from '../../service/auth/auth.service';
import { ToastService } from '../../services/toast.service';

@Component({
  selector: 'app-login',
  imports: [FormsModule, RouterModule, CommonModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  loginData: LoginRequest = {
    username: '',
    password: ''
  };

  isLoading = false;
  isFormValid = false;

  constructor(
    private authService: AuthService,
    private router: Router,
    private toastService: ToastService
  ) {}

  ngOnInit(): void {
    // Redirect if already authenticated
    if (this.authService.isAuthenticated) {
      this.redirectBasedOnRole();
    }
  }

  onInputChange(): void {
    this.isFormValid = this.loginData.username.trim().length > 0 && 
                      this.loginData.password.trim().length > 0;
  }

  onLogin(): void {
    if (!this.isFormValid) {
      this.toastService.error('Please fill in all fields');
      return;
    }

    this.isLoading = true;

    this.authService.login(this.loginData).subscribe({
      next: (response) => {
        this.isLoading = false;
        this.toastService.success('Login successful!');
        
        // Handle login response and redirect based on role
        this.authService.handleLoginResponse(response);
      },
      error: (error) => {
        this.isLoading = false;
        console.error('Login error:', error);
        
        // Show appropriate error message
        const errorMessage = error.error?.message || 'Login failed. Please check your credentials.';
        this.toastService.error(errorMessage);
      }
    });
  }

  onKeyPress(event: KeyboardEvent): void {
    if (event.key === 'Enter') {
      this.onLogin();
    }
  }

  private redirectBasedOnRole(): void {
    if (this.authService.isAdmin) {
      this.router.navigate(['/admin/dashboard']);
    } else {
      this.router.navigate(['/home']);
    }
  }
}
