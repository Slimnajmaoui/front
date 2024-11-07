import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmincreateadminComponent } from './admincreateadmin.component';

describe('AdmincreateadminComponent', () => {
  let component: AdmincreateadminComponent;
  let fixture: ComponentFixture<AdmincreateadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdmincreateadminComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdmincreateadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
