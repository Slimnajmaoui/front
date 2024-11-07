import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminviewaffprojetComponent } from './adminviewaffprojet.component';

describe('AdminviewaffprojetComponent', () => {
  let component: AdminviewaffprojetComponent;
  let fixture: ComponentFixture<AdminviewaffprojetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminviewaffprojetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminviewaffprojetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
