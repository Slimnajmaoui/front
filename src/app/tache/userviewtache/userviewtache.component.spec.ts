import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserviewtacheComponent } from './userviewtache.component';

describe('UserviewtacheComponent', () => {
  let component: UserviewtacheComponent;
  let fixture: ComponentFixture<UserviewtacheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserviewtacheComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserviewtacheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
