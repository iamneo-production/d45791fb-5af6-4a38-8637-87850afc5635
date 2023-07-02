import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminHeadNavComponent } from './admin-head-nav.component';

describe('AdminHeadNavComponent', () => {
  let component: AdminHeadNavComponent;
  let fixture: ComponentFixture<AdminHeadNavComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminHeadNavComponent]
    });
    fixture = TestBed.createComponent(AdminHeadNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
