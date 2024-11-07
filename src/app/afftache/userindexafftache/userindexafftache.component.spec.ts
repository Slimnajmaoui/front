import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserindexafftacheComponent } from './userindexafftache.component';

describe('UserindexafftacheComponent', () => {
  let component: UserindexafftacheComponent;
  let fixture: ComponentFixture<UserindexafftacheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserindexafftacheComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserindexafftacheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
