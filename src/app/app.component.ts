import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EligibilityComponent } from './eligibility/eligibility.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, EligibilityComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'morse-assessment-ng';
}
