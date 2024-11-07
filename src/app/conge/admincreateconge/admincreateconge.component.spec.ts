import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmincreatecongeComponent } from './admincreateconge.component';

describe('AdmincreatecongeComponent', () => {
  let component: AdmincreatecongeComponent;
  let fixture: ComponentFixture<AdmincreatecongeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdmincreatecongeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdmincreatecongeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
