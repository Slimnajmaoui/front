import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserviewaffprojetComponent } from './userviewaffprojet.component';

describe('UserviewaffprojetComponent', () => {
  let component: UserviewaffprojetComponent;
  let fixture: ComponentFixture<UserviewaffprojetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserviewaffprojetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserviewaffprojetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
