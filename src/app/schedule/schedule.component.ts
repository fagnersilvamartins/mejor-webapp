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
  dateSelected: any;

  constructor(
    private route: ActivatedRoute,
    private scheduleService: ScheduleService
  ) { }

  selectDate(date) {
    this.dateSelected = date;
  }

  editDateSchedule() {
    this.dateSelected = null;
  }

  save() {
    this.scheduleService.saveSchedule({ userId: this.userId, dateId: this.dateSelected._id }).subscribe((dates: any) => {
      console.log('success');
    });
  }

  ngOnInit() {
    this.routeParams = this.route.queryParams.subscribe(params => {
      if (params['id']) {
        this.userId = params['id'];
        this.scheduleService.getDates().subscribe((dates: any) => {
          this.dates = dates;
        });
      }
    });
  }

  ngOnDestroy() {
    this.routeParams.unsubscribe();
  }
}
