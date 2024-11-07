import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserindexaffprojetComponent } from './userindexaffprojet.component';

describe('UserindexaffprojetComponent', () => {
  let component: UserindexaffprojetComponent;
  let fixture: ComponentFixture<UserindexaffprojetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserindexaffprojetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserindexaffprojetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
