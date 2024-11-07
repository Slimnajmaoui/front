import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminindexchefdeprojetComponent } from './adminindexchefdeprojet.component';

describe('AdminindexchefdeprojetComponent', () => {
  let component: AdminindexchefdeprojetComponent;
  let fixture: ComponentFixture<AdminindexchefdeprojetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminindexchefdeprojetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminindexchefdeprojetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
