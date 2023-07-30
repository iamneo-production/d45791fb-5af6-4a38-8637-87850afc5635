import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchAlleventsComponent } from './search-allevents.component';

describe('SearchAlleventsComponent', () => {
  let component: SearchAlleventsComponent;
  let fixture: ComponentFixture<SearchAlleventsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchAlleventsComponent]
    });
    fixture = TestBed.createComponent(SearchAlleventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
