import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {


  isAuthenticated = false;

  constructor(private authService: AuthenticationService,
    private router: Router,) {}

  authWithGoogle(): void {
    this.authService
      .loginWithGoogle()
      .then(() => {
        if (this.authService.isAuthenticated()) {
          this.router.navigate(['']);
          this.isAuthenticated = true;
        }
      })
      .catch((err) => console.log(err));
  }


  getCurrentUser(): void {
    this.authService.getCurrentUser().subscribe((response) => {
      if (response) {
        this.isAuthenticated = true;
        return;
      }
      this.isAuthenticated = false;
    });
  }

  logout(): void {
    this.authService.logout().then(() => {
      this.router.navigate(['/']);
      this.isAuthenticated = false;
    });
  }
  

  
}
