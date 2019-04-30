import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginCodeinputComponent } from './login-codeinput.component';

describe('LoginCodeinputComponent', () => {
  let component: LoginCodeinputComponent;
  let fixture: ComponentFixture<LoginCodeinputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginCodeinputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginCodeinputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
