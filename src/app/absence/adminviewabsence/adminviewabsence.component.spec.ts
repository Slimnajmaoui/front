import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminviewabsenceComponent } from './adminviewabsence.component';

describe('AdminviewabsenceComponent', () => {
  let component: AdminviewabsenceComponent;
  let fixture: ComponentFixture<AdminviewabsenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminviewabsenceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminviewabsenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
