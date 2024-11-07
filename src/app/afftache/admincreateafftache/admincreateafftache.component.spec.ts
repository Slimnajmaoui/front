import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmincreateafftacheComponent } from './admincreateafftache.component';

describe('AdmincreateafftacheComponent', () => {
  let component: AdmincreateafftacheComponent;
  let fixture: ComponentFixture<AdmincreateafftacheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdmincreateafftacheComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdmincreateafftacheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
