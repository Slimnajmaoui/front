import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminindextacheComponent } from './adminindextache.component';

describe('AdminindextacheComponent', () => {
  let component: AdminindextacheComponent;
  let fixture: ComponentFixture<AdminindextacheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminindextacheComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminindextacheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
