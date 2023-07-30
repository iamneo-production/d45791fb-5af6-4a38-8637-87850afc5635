import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRoleFilterComponent } from './user-role-filter.component';

describe('UserRoleFilterComponent', () => {
  let component: UserRoleFilterComponent;
  let fixture: ComponentFixture<UserRoleFilterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserRoleFilterComponent]
    });
    fixture = TestBed.createComponent(UserRoleFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
