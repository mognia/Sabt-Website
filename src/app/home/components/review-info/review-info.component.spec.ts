import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewInfoComponent } from './review-info.component';

describe('ReviewInfoComponent', () => {
  let component: ReviewInfoComponent;
  let fixture: ComponentFixture<ReviewInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReviewInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
