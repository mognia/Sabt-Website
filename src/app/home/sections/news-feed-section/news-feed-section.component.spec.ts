import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsFeedSectionComponent } from './news-feed-section.component';

describe('NewsFeedSectionComponent', () => {
  let component: NewsFeedSectionComponent;
  let fixture: ComponentFixture<NewsFeedSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsFeedSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsFeedSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
