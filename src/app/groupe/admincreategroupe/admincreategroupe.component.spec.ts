import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmincreategroupeComponent } from './admincreategroupe.component';

describe('AdmincreategroupeComponent', () => {
  let component: AdmincreategroupeComponent;
  let fixture: ComponentFixture<AdmincreategroupeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdmincreategroupeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdmincreategroupeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
