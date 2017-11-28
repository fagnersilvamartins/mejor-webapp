import { TokenManagerService } from './../../core/token-manager.service';
import { Injectable } from '@angular/core';

import { Http, RequestOptions } from '@angular/http';
import { HttpHeaders } from '@angular/common/http';

import { Api } from './../../core/api';
import { User } from './../../models/user';

@Injectable()
export class ProfileService {

  constructor(
    private api: Api,
    private tokenService: TokenManagerService,
    private http: Http
  ) { }

  getUser(id: number) {
    return this.api.get('user/' + id + '?access_token=' + this.tokenService.getToken(), {});
  }

  updateUser(user: User) {
    const body = {
      "name": user.profile.name,
      "birthday": user.profile.birthday,
      "city": user.profile.city,
      "education": user.profile.academicEducation,
      "job": user.profile.job
    };
    return this.api.post('user/' + user.id + '?access_token=' + this.tokenService.getToken(),
      body,
      {
        headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded'),
      }
    );
  }

}
