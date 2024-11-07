import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserviewabsenceComponent } from './userviewabsence.component';

describe('UserviewabsenceComponent', () => {
  let component: UserviewabsenceComponent;
  let fixture: ComponentFixture<UserviewabsenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserviewabsenceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserviewabsenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
