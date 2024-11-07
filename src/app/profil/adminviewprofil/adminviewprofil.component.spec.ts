import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminviewprofilComponent } from './adminviewprofil.component';

describe('AdminviewprofilComponent', () => {
  let component: AdminviewprofilComponent;
  let fixture: ComponentFixture<AdminviewprofilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminviewprofilComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminviewprofilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
