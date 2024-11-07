import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminindexuserComponent } from './adminindexuser.component';

describe('AdminindexuserComponent', () => {
  let component: AdminindexuserComponent;
  let fixture: ComponentFixture<AdminindexuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminindexuserComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminindexuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
