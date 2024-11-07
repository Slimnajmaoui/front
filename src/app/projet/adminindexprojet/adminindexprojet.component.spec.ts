import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminindexprojetComponent } from './adminindexprojet.component';

describe('AdminindexprojetComponent', () => {
  let component: AdminindexprojetComponent;
  let fixture: ComponentFixture<AdminindexprojetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminindexprojetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminindexprojetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
