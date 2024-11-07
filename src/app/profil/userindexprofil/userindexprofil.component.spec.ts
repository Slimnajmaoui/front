import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserindexprofilComponent } from './userindexprofil.component';

describe('UserindexprofilComponent', () => {
  let component: UserindexprofilComponent;
  let fixture: ComponentFixture<UserindexprofilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserindexprofilComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserindexprofilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
