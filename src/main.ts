// main.ts
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';

// bootstrapApplication(AppComponent, {
//   providers: []
// });


bootstrapApplication(AppComponent)
  .catch(err => console.error(err));
