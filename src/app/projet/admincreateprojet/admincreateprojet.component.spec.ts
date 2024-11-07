import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmincreateprojetComponent } from './admincreateprojet.component';

describe('AdmincreateprojetComponent', () => {
  let component: AdmincreateprojetComponent;
  let fixture: ComponentFixture<AdmincreateprojetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdmincreateprojetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdmincreateprojetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
