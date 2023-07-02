import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateventComponent } from './createvent.component';

describe('CreateventComponent', () => {
  let component: CreateventComponent;
  let fixture: ComponentFixture<CreateventComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateventComponent]
    });
    fixture = TestBed.createComponent(CreateventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
