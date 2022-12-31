import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { NewJourneyComponent } from './new-journey.component';

describe('NewJourneyComponent', () => {
  let component: NewJourneyComponent;
  let fixture: ComponentFixture<NewJourneyComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NewJourneyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewJourneyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
