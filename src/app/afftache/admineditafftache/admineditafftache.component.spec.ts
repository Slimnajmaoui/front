import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmineditafftacheComponent } from './admineditafftache.component';

describe('AdmineditafftacheComponent', () => {
  let component: AdmineditafftacheComponent;
  let fixture: ComponentFixture<AdmineditafftacheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdmineditafftacheComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdmineditafftacheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
