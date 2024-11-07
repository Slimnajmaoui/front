import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmincreateaffprojetComponent } from './admincreateaffprojet.component';

describe('AdmincreateaffprojetComponent', () => {
  let component: AdmincreateaffprojetComponent;
  let fixture: ComponentFixture<AdmincreateaffprojetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdmincreateaffprojetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdmincreateaffprojetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
