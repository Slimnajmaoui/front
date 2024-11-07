import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmincreatecompetenceComponent } from './admincreatecompetence.component';

describe('AdmincreatecompetenceComponent', () => {
  let component: AdmincreatecompetenceComponent;
  let fixture: ComponentFixture<AdmincreatecompetenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdmincreatecompetenceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdmincreatecompetenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
