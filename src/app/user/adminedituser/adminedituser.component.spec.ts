import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminedituserComponent } from './adminedituser.component';

describe('AdminedituserComponent', () => {
  let component: AdminedituserComponent;
  let fixture: ComponentFixture<AdminedituserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminedituserComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminedituserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
