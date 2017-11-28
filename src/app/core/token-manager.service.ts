import { Injectable } from '@angular/core';

@Injectable()
export class TokenManagerService {

  key = 'token';

  constructor() { }

  setToken(token) {
    localStorage.setItem(this.key, token);
  }

  getToken() {
    return localStorage.getItem(this.key);
  }
}
