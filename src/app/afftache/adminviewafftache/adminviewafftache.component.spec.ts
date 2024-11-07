import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminviewafftacheComponent } from './adminviewafftache.component';

describe('AdminviewafftacheComponent', () => {
  let component: AdminviewafftacheComponent;
  let fixture: ComponentFixture<AdminviewafftacheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminviewafftacheComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminviewafftacheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
