import { Subscription } from 'rxjs/Subscription';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';

import { AuthenticationService } from './shared/authentication.service';
import { TokenManagerService } from '../core/token-manager.service';

@Component({
  selector: 'app-instagram-authentication-callback',
  templateUrl: './instagram-authentication-callback.component.html',
  styleUrls: ['./instagram-authentication-callback.component.scss']
})
export class InstagramAuthenticationCallbackComponent implements OnInit, OnDestroy {

  routeParams: Subscription;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthenticationService,
    private tokenService: TokenManagerService
  ) { }

  ngOnInit() {
    this.routeParams = this.route.fragment.subscribe((fragment: string) => {
      const token = fragment.split('=')[1];
      if (token) {
        this.authService.login(token).subscribe((res: any) => {
          this.tokenService.setToken(token);
          this.router.navigate(['/profile'], { queryParams: { id: res.id_instagram } });
        }, err => {
          this.router.navigate(['/login']);
        });
      }
    });
  }

  ngOnDestroy() {
    this.routeParams.unsubscribe();
  }

}
