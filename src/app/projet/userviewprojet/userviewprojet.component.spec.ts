import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserviewprojetComponent } from './userviewprojet.component';

describe('UserviewprojetComponent', () => {
  let component: UserviewprojetComponent;
  let fixture: ComponentFixture<UserviewprojetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserviewprojetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserviewprojetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
