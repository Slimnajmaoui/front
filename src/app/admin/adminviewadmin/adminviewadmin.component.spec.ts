import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminviewadminComponent } from './adminviewadmin.component';

describe('AdminviewadminComponent', () => {
  let component: AdminviewadminComponent;
  let fixture: ComponentFixture<AdminviewadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminviewadminComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminviewadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
