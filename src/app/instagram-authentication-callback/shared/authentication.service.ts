import { Injectable } from '@angular/core';
import { Api } from '../../core/api';

@Injectable()
export class AuthenticationService {

  constructor(private api: Api) { }

  login(token) {
    return this.api.get('auth/instagram?access_token=' + token, {});
  }
}
