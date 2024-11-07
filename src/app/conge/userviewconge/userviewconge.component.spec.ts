import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserviewcongeComponent } from './userviewconge.component';

describe('UserviewcongeComponent', () => {
  let component: UserviewcongeComponent;
  let fixture: ComponentFixture<UserviewcongeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserviewcongeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserviewcongeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
