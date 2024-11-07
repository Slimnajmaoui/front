import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserindexchefdeprojetComponent } from './userindexchefdeprojet.component';

describe('UserindexchefdeprojetComponent', () => {
  let component: UserindexchefdeprojetComponent;
  let fixture: ComponentFixture<UserindexchefdeprojetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserindexchefdeprojetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserindexchefdeprojetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
