import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit, OnDestroy {

  routeParams: Subscription;

  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.routeParams = this.route.queryParams.subscribe(params => {
    });

  }

  ngOnDestroy() {
    this.routeParams.unsubscribe();
  }

}
