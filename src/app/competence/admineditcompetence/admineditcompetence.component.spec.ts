import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmineditcompetenceComponent } from './admineditcompetence.component';

describe('AdmineditcompetenceComponent', () => {
  let component: AdmineditcompetenceComponent;
  let fixture: ComponentFixture<AdmineditcompetenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdmineditcompetenceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdmineditcompetenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
