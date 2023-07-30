import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewcategoryformComponent } from './newcategoryform.component';

describe('NewcategoryformComponent', () => {
  let component: NewcategoryformComponent;
  let fixture: ComponentFixture<NewcategoryformComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewcategoryformComponent]
    });
    fixture = TestBed.createComponent(NewcategoryformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
