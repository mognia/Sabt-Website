import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginPhoneinputComponent } from './login-phoneinput.component';

describe('LoginPhoneinputComponent', () => {
  let component: LoginPhoneinputComponent;
  let fixture: ComponentFixture<LoginPhoneinputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginPhoneinputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginPhoneinputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
