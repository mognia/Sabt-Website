import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginMailinputComponent } from './login-mailinput.component';

describe('LoginMailinputComponent', () => {
  let component: LoginMailinputComponent;
  let fixture: ComponentFixture<LoginMailinputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginMailinputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginMailinputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
