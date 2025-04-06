import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../services/auth.service'; // Điều chỉnh đường dẫn nếu khác
import { Router } from '@angular/router';

// Import các module của Angular Material
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSnackBar } from '@angular/material/snack-bar'; // Thêm snack bar thông báo
import { ReactiveFormsModule } from '@angular/forms'; // Import ReactiveFormsModule

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule, // Import MatFormFieldModule ở đây
    ReactiveFormsModule
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private snackBar: MatSnackBar // Thêm MatSnackBar để thông báo
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;
      const success = this.authService.login(email, password);

      if (success) {
        this.router.navigate(['/home']);
        this.snackBar.open('Đăng nhập thành công!', 'Đóng', { duration: 2000 });
      } else {
        this.snackBar.open('Thông tin đăng nhập không đúng!', 'Đóng', { duration: 2000 });
      }
    } else {
      this.snackBar.open('Vui lòng điền đầy đủ thông tin!', 'Đóng', { duration: 2000 });
    }
  }
}
