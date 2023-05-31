import { Component } from '@angular/core';
import { AuthService } from './services/auth/auth.service';
import { Role } from './models/role';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'EM_Site';

  constructor() {}
}
