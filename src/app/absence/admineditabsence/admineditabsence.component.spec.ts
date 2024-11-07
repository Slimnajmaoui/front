import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmineditabsenceComponent } from './admineditabsence.component';

describe('AdmineditabsenceComponent', () => {
  let component: AdmineditabsenceComponent;
  let fixture: ComponentFixture<AdmineditabsenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdmineditabsenceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdmineditabsenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
