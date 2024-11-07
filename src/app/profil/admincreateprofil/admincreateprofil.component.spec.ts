import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmincreateprofilComponent } from './admincreateprofil.component';

describe('AdmincreateprofilComponent', () => {
  let component: AdmincreateprofilComponent;
  let fixture: ComponentFixture<AdmincreateprofilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdmincreateprofilComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdmincreateprofilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
