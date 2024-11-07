import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmineditavprojetComponent } from './admineditavprojet.component';

describe('AdmineditavprojetComponent', () => {
  let component: AdmineditavprojetComponent;
  let fixture: ComponentFixture<AdmineditavprojetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdmineditavprojetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdmineditavprojetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
