import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmineditaffprojetComponent } from './admineditaffprojet.component';

describe('AdmineditaffprojetComponent', () => {
  let component: AdmineditaffprojetComponent;
  let fixture: ComponentFixture<AdmineditaffprojetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdmineditaffprojetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdmineditaffprojetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
