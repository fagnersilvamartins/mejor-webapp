import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';
import { Subscription } from 'rxjs/Subscription';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

import { ProfileService } from './shared/profile.service';
import { User } from './../models/user';
import { Profile } from './../models/profile';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit, OnDestroy {

  routeParams: Subscription;
  user: User;
  birthday;
  error;
  dataForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private profileService: ProfileService,
    private formBuilder: FormBuilder,
    private router: Router,
  ) { }

  configFormGroup() {
    this.dataForm = this.formBuilder.group({
      fullName: [null, Validators.required],
      birthday: [null, Validators.required],
      city: [null, Validators.required],
      education: [null, Validators.required],
      job: [null, Validators.required]
    });
  }

  onSubmit() {
    if (this.dataForm.valid) {
      this.user.profile.birthday = new Date(this.birthday.year, this.birthday.month, this.birthday.day);
      this.profileService.updateUser(this.user).subscribe((data) => {
        this.router.navigate(['/schedule'], { queryParams: { id: this.user.id } });
      }, (err) => {
        this.router.navigate(['/schedule']);
      });
    } else {
      this.error = true;
    }
  }

  ngOnInit() {
    this.routeParams = this.route.queryParams.subscribe(params => {
      if (params['id']) {
        this.profileService.getUser(params['id']).subscribe((user: any) => {
          const profile = new Profile(user.full_name, new Date, '', '', '');
          this.user = new User(user.id_instagram, user.username, user.image, profile);
        });
      }
    });

    this.configFormGroup();
  }

  ngOnDestroy() {
    this.routeParams.unsubscribe();
  }

}
