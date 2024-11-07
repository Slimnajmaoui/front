import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminviewtacheComponent } from './adminviewtache.component';

describe('AdminviewtacheComponent', () => {
  let component: AdminviewtacheComponent;
  let fixture: ComponentFixture<AdminviewtacheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminviewtacheComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminviewtacheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
