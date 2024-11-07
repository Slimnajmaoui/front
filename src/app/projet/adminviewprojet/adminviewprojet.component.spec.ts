import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminviewprojetComponent } from './adminviewprojet.component';

describe('AdminviewprojetComponent', () => {
  let component: AdminviewprojetComponent;
  let fixture: ComponentFixture<AdminviewprojetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminviewprojetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminviewprojetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
