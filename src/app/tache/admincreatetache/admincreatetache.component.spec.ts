import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmincreatetacheComponent } from './admincreatetache.component';

describe('AdmincreatetacheComponent', () => {
  let component: AdmincreatetacheComponent;
  let fixture: ComponentFixture<AdmincreatetacheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdmincreatetacheComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdmincreatetacheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
