import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserindexuserComponent } from './userindexuser.component';

describe('UserindexuserComponent', () => {
  let component: UserindexuserComponent;
  let fixture: ComponentFixture<UserindexuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserindexuserComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserindexuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
