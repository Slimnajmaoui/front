import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminviewcongeComponent } from './adminviewconge.component';

describe('AdminviewcongeComponent', () => {
  let component: AdminviewcongeComponent;
  let fixture: ComponentFixture<AdminviewcongeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminviewcongeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminviewcongeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
