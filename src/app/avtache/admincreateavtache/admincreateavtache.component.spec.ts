import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmincreateavtacheComponent } from './admincreateavtache.component';

describe('AdmincreateavtacheComponent', () => {
  let component: AdmincreateavtacheComponent;
  let fixture: ComponentFixture<AdmincreateavtacheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdmincreateavtacheComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdmincreateavtacheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
