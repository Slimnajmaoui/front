import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserindexprojetComponent } from './userindexprojet.component';

describe('UserindexprojetComponent', () => {
  let component: UserindexprojetComponent;
  let fixture: ComponentFixture<UserindexprojetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserindexprojetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserindexprojetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
