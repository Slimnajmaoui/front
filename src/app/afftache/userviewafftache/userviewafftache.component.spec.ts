import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserviewafftacheComponent } from './userviewafftache.component';

describe('UserviewafftacheComponent', () => {
  let component: UserviewafftacheComponent;
  let fixture: ComponentFixture<UserviewafftacheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserviewafftacheComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserviewafftacheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
