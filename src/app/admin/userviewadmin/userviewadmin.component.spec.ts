import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserviewadminComponent } from './userviewadmin.component';

describe('UserviewadminComponent', () => {
  let component: UserviewadminComponent;
  let fixture: ComponentFixture<UserviewadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserviewadminComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserviewadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
