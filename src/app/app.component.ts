import { Component } from '@angular/core';
import { EligibilityComponent } from './eligibility/eligibility.component';
import { HeaderComponent } from "./header/header.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [EligibilityComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'morse-assessment-ng';
}
