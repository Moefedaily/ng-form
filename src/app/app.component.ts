import { Component } from '@angular/core';
import { RegistrationComponent } from './components/registration/registration.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [RegistrationComponent],
})
export class AppComponent {
  title = 'Simple Registration Form';
}
