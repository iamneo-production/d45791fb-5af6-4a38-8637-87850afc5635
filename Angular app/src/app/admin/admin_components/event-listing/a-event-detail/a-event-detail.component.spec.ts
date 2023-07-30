import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AEventDetailComponent } from './a-event-detail.component';

describe('AEventDetailComponent', () => {
  let component: AEventDetailComponent;
  let fixture: ComponentFixture<AEventDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AEventDetailComponent]
    });
    fixture = TestBed.createComponent(AEventDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
