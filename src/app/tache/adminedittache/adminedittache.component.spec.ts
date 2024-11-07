import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminedittacheComponent } from './adminedittache.component';

describe('AdminedittacheComponent', () => {
  let component: AdminedittacheComponent;
  let fixture: ComponentFixture<AdminedittacheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminedittacheComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminedittacheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
