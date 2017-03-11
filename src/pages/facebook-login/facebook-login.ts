import { Component } from '@angular/core';
import { AuthenticationService } from '../../services/auth/authentication.service'

@Component({
  selector: 'facebook-login',
  templateUrl: 'facebook-login.html'
})

export class FacebookLoginComponent {

  constructor(public authenticationService: AuthenticationService) {
    console.log('Is Connected: %s', this.authenticationService.IsConnected);
  }

  onFacebookLoginClick() {
    this.authenticationService.Login();
  };
}