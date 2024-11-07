import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserindexadminComponent } from './userindexadmin.component';

describe('UserindexadminComponent', () => {
  let component: UserindexadminComponent;
  let fixture: ComponentFixture<UserindexadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserindexadminComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserindexadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
