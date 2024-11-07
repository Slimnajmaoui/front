import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmincreatechefdeprojetComponent } from './admincreatechefdeprojet.component';

describe('AdmincreatechefdeprojetComponent', () => {
  let component: AdmincreatechefdeprojetComponent;
  let fixture: ComponentFixture<AdmincreatechefdeprojetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdmincreatechefdeprojetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdmincreatechefdeprojetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
