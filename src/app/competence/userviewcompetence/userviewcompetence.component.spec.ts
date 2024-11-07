import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserviewcompetenceComponent } from './userviewcompetence.component';

describe('UserviewcompetenceComponent', () => {
  let component: UserviewcompetenceComponent;
  let fixture: ComponentFixture<UserviewcompetenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserviewcompetenceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserviewcompetenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
