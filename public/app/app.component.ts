import { Component } from '@angular/core';
import { AuthenticationService } from './authentication/authentication.service';

@Component({
  selector: 'mean-app',
  template: `
    <h1 *ngIf="!authenticationService.user">Please sign in</h1>
    <h1 *ngIf="authenticationService.user">Hello {{authenticationService.user.firstName}}</h1>
    <router-outlet></router-outlet>`,
})

export class AppComponent {
  constructor (private authenticationService: AuthenticationService) { }
}
