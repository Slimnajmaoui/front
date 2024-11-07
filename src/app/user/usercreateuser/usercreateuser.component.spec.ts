import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsercreateuserComponent } from './usercreateuser.component';

describe('UsercreateuserComponent', () => {
  let component: UsercreateuserComponent;
  let fixture: ComponentFixture<UsercreateuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsercreateuserComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsercreateuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
