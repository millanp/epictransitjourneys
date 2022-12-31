import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { JourneyDetailComponent } from './journey-detail.component';

describe('JourneyDetailComponent', () => {
  let component: JourneyDetailComponent;
  let fixture: ComponentFixture<JourneyDetailComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ JourneyDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JourneyDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
