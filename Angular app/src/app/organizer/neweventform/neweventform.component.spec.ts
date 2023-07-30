import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NeweventformComponent } from './neweventform.component';

describe('NeweventformComponent', () => {
  let component: NeweventformComponent;
  let fixture: ComponentFixture<NeweventformComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NeweventformComponent]
    });
    fixture = TestBed.createComponent(NeweventformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
