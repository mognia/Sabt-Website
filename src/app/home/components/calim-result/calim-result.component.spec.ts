import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalimResultComponent } from './calim-result.component';

describe('CalimResultComponent', () => {
  let component: CalimResultComponent;
  let fixture: ComponentFixture<CalimResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalimResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalimResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
