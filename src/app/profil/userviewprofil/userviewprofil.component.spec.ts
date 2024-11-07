import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserviewprofilComponent } from './userviewprofil.component';

describe('UserviewprofilComponent', () => {
  let component: UserviewprofilComponent;
  let fixture: ComponentFixture<UserviewprofilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserviewprofilComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserviewprofilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
