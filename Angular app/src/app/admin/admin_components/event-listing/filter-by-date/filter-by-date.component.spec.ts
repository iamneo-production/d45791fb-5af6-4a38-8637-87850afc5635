import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterByDateComponent } from './filter-by-date.component';

describe('FilterByDateComponent', () => {
  let component: FilterByDateComponent;
  let fixture: ComponentFixture<FilterByDateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FilterByDateComponent]
    });
    fixture = TestBed.createComponent(FilterByDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
