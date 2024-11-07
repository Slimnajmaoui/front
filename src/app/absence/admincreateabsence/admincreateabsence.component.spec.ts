import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmincreateabsenceComponent } from './admincreateabsence.component';

describe('AdmincreateabsenceComponent', () => {
  let component: AdmincreateabsenceComponent;
  let fixture: ComponentFixture<AdmincreateabsenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdmincreateabsenceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdmincreateabsenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
