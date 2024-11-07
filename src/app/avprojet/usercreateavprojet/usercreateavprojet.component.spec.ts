import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsercreateavprojetComponent } from './usercreateavprojet.component';

describe('UsercreateavprojetComponent', () => {
  let component: UsercreateavprojetComponent;
  let fixture: ComponentFixture<UsercreateavprojetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsercreateavprojetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsercreateavprojetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
