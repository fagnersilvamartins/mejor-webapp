import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstagramAuthenticationCallbackComponent } from './instagram-authentication-callback.component';

describe('InstagramAuthenticationCallbackComponent', () => {
  let component: InstagramAuthenticationCallbackComponent;
  let fixture: ComponentFixture<InstagramAuthenticationCallbackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstagramAuthenticationCallbackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstagramAuthenticationCallbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
