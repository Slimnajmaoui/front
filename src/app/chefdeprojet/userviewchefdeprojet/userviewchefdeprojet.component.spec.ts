import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserviewchefdeprojetComponent } from './userviewchefdeprojet.component';

describe('UserviewchefdeprojetComponent', () => {
  let component: UserviewchefdeprojetComponent;
  let fixture: ComponentFixture<UserviewchefdeprojetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserviewchefdeprojetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserviewchefdeprojetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
