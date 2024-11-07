import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserindextacheComponent } from './userindextache.component';

describe('UserindextacheComponent', () => {
  let component: UserindextacheComponent;
  let fixture: ComponentFixture<UserindextacheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserindextacheComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserindextacheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
