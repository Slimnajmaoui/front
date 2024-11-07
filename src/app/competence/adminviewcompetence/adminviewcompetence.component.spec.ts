import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminviewcompetenceComponent } from './adminviewcompetence.component';

describe('AdminviewcompetenceComponent', () => {
  let component: AdminviewcompetenceComponent;
  let fixture: ComponentFixture<AdminviewcompetenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminviewcompetenceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminviewcompetenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
