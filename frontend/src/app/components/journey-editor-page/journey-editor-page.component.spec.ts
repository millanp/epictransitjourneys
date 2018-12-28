import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JourneyEditorPageComponent } from './journey-editor-page.component';

describe('JourneyEditorPageComponent', () => {
  let component: JourneyEditorPageComponent;
  let fixture: ComponentFixture<JourneyEditorPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JourneyEditorPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JourneyEditorPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
