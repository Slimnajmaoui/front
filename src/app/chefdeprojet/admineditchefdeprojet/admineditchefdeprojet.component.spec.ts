import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmineditchefdeprojetComponent } from './admineditchefdeprojet.component';

describe('AdmineditchefdeprojetComponent', () => {
  let component: AdmineditchefdeprojetComponent;
  let fixture: ComponentFixture<AdmineditchefdeprojetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdmineditchefdeprojetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdmineditchefdeprojetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
