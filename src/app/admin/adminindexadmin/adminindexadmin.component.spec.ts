import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminindexadminComponent } from './adminindexadmin.component';

describe('AdminindexadminComponent', () => {
  let component: AdminindexadminComponent;
  let fixture: ComponentFixture<AdminindexadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminindexadminComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminindexadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
