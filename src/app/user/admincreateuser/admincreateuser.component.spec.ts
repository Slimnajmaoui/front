import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmincreateuserComponent } from './admincreateuser.component';

describe('AdmincreateuserComponent', () => {
  let component: AdmincreateuserComponent;
  let fixture: ComponentFixture<AdmincreateuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdmincreateuserComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdmincreateuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
