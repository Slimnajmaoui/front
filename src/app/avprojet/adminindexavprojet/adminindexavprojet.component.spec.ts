import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminindexavprojetComponent } from './adminindexavprojet.component';

describe('AdminindexavprojetComponent', () => {
  let component: AdminindexavprojetComponent;
  let fixture: ComponentFixture<AdminindexavprojetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminindexavprojetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminindexavprojetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
