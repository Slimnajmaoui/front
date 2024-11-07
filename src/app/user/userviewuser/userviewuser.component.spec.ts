import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserviewuserComponent } from './userviewuser.component';

describe('UserviewuserComponent', () => {
  let component: UserviewuserComponent;
  let fixture: ComponentFixture<UserviewuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserviewuserComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserviewuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
