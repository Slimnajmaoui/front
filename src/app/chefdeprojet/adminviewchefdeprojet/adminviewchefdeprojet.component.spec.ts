import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminviewchefdeprojetComponent } from './adminviewchefdeprojet.component';

describe('AdminviewchefdeprojetComponent', () => {
  let component: AdminviewchefdeprojetComponent;
  let fixture: ComponentFixture<AdminviewchefdeprojetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminviewchefdeprojetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminviewchefdeprojetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
