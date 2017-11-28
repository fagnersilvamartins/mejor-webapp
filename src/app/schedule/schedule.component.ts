import { Subscription } from 'rxjs/Subscription';
import { ActivatedRoute } from '@angular/router';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';
import { Component, OnInit } from '@angular/core';

import { ScheduleService } from './shared/schedule.service';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit, OnDestroy {

  routeParams: Subscription;
  dates: any = [];
  userId: number;
  dateSelected: any = { times: [] };
  dateSchedule: Date;

  constructor(
    private route: ActivatedRoute,
    private scheduleService: ScheduleService
  ) { }

  selectDate(date) {
    this.dateSelected = date;
  }

  selectTime(time) {
    this.dateSchedule = new Date(this.dateSelected.date);
  }

  editDateSchedule() {
    this.dateSchedule = null;
  }

  save() {
    this.scheduleService.saveSchedule({ userId: this.userId, date: this.dateSchedule }).subscribe((dates: any) => {
      console.log('success');
    });
  }

  ngOnInit() {
    this.routeParams = this.route.queryParams.subscribe(params => {
      if (params['id']) {
        this.userId = params['id'];
        this.scheduleService.getDates().subscribe((dates: any) => {
          this.dates = dates;
          if (this.dates.length > 0) {
            this.dateSelected = this.dates[0];
          }
        });
      }
    });
  }

  ngOnDestroy() {
    this.routeParams.unsubscribe();
  }
}
