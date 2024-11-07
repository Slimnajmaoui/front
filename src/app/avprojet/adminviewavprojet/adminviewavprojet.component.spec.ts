import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminviewavprojetComponent } from './adminviewavprojet.component';

describe('AdminviewavprojetComponent', () => {
  let component: AdminviewavprojetComponent;
  let fixture: ComponentFixture<AdminviewavprojetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminviewavprojetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminviewavprojetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
