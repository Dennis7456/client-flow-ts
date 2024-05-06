import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { ClientsTableComponent } from './clients-table/clients-table.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDividerModule } from '@angular/material/divider';
import { AuthService } from './services/auth.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterOutlet, HttpClientModule, MatSlideToggleModule, ClientsTableComponent, MatButtonModule, MatGridListModule, MatDividerModule, RouterLink, RouterLinkActive],
  providers: [HttpClientModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'client-flow-ts';
  constructor(
    private router: Router,
    private authService: AuthService
    ) { }

  isLoggedIn() {
    return this.authService.isLoggedIn();
  }

  goToPage(page: string): void {
    this.router.navigateByUrl(page);
  }
}
