import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserindexabsenceComponent } from './userindexabsence.component';

describe('UserindexabsenceComponent', () => {
  let component: UserindexabsenceComponent;
  let fixture: ComponentFixture<UserindexabsenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserindexabsenceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserindexabsenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
