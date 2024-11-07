import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmineditadminComponent } from './admineditadmin.component';

describe('AdmineditadminComponent', () => {
  let component: AdmineditadminComponent;
  let fixture: ComponentFixture<AdmineditadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdmineditadminComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdmineditadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
