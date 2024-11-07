import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmincreateavprojetComponent } from './admincreateavprojet.component';

describe('AdmincreateavprojetComponent', () => {
  let component: AdmincreateavprojetComponent;
  let fixture: ComponentFixture<AdmincreateavprojetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdmincreateavprojetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdmincreateavprojetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
