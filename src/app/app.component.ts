import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { IndexapplicationComponent } from './indexapplication/indexapplication.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,IndexapplicationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'pfe1';
}
