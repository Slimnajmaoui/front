import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmineditprofilComponent } from './admineditprofil.component';

describe('AdmineditprofilComponent', () => {
  let component: AdmineditprofilComponent;
  let fixture: ComponentFixture<AdmineditprofilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdmineditprofilComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdmineditprofilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
