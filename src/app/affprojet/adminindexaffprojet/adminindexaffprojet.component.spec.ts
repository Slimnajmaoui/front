import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminindexaffprojetComponent } from './adminindexaffprojet.component';

describe('AdminindexaffprojetComponent', () => {
  let component: AdminindexaffprojetComponent;
  let fixture: ComponentFixture<AdminindexaffprojetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminindexaffprojetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminindexaffprojetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
