import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  INSTAGRAM_CLIENT_ID = 'df289f976a6f49e2b16d562eebdeff0c';
  INSTAGRAM_CLIENT_SECRET = '7c960064d74647e3bf6ae2130b782780';
  REDIRECT_URI = 'http://localhost:5001/authentication';

  constructor() { }

  ngOnInit() {
  }

  onLoginWithInstagram() {
    window.location.href =
      'https://api.instagram.com/oauth/authorize/?client_id=' + this.INSTAGRAM_CLIENT_ID +
      '&redirect_uri=' + this.REDIRECT_URI + '&response_type=token';
  }

}
