import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Api } from './../../core/api';
import { TokenManagerService } from './../../core/token-manager.service';

@Injectable()
export class ScheduleService {

  constructor(
    private api: Api,
    private tokenService: TokenManagerService
  ) { }

  getDates() {
    return this.api.get('schedule/alldates?access_token=' + this.tokenService.getToken(), {});
  }

  saveSchedule(schedule: { userId: number, date: Date }) {
    const body = {
      "id_user": schedule.userId,
      "date": schedule.date
    };
    return this.api.post('schedule/?access_token=' + this.tokenService.getToken(),
      body,
      {
        headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded'),
      }
    );
  }
}
