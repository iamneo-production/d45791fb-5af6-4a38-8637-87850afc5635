import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditeventformComponent } from './editeventform.component';

describe('EditeventformComponent', () => {
  let component: EditeventformComponent;
  let fixture: ComponentFixture<EditeventformComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditeventformComponent]
    });
    fixture = TestBed.createComponent(EditeventformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
