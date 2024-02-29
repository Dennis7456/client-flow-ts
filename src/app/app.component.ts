import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { ClientsTableComponent } from './clients-table/clients-table.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDividerModule } from '@angular/material/divider';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatSlideToggleModule, ClientsTableComponent, MatButtonModule, MatGridListModule, MatDividerModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'client-flow-ts';
  constructor(private router: Router) { }
  goToLoginPage(page: string): void {
    this.router.navigateByUrl(page);
  }
}
