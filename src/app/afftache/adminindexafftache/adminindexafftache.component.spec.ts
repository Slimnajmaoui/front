import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminindexafftacheComponent } from './adminindexafftache.component';

describe('AdminindexafftacheComponent', () => {
  let component: AdminindexafftacheComponent;
  let fixture: ComponentFixture<AdminindexafftacheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminindexafftacheComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminindexafftacheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
