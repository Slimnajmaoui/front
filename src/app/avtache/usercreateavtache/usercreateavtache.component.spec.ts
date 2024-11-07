import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsercreateavtacheComponent } from './usercreateavtache.component';

describe('UsercreateavtacheComponent', () => {
  let component: UsercreateavtacheComponent;
  let fixture: ComponentFixture<UsercreateavtacheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsercreateavtacheComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsercreateavtacheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
