import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CancelledeventsComponent } from './cancelledevents.component';

describe('CancelledeventsComponent', () => {
  let component: CancelledeventsComponent;
  let fixture: ComponentFixture<CancelledeventsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CancelledeventsComponent]
    });
    fixture = TestBed.createComponent(CancelledeventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
