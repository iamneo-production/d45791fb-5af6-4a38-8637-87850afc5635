import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizerprofilepageComponent } from './organizerprofilepage.component';

describe('OrganizerprofilepageComponent', () => {
  let component: OrganizerprofilepageComponent;
  let fixture: ComponentFixture<OrganizerprofilepageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrganizerprofilepageComponent]
    });
    fixture = TestBed.createComponent(OrganizerprofilepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
