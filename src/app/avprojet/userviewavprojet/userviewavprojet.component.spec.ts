import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserviewavprojetComponent } from './userviewavprojet.component';

describe('UserviewavprojetComponent', () => {
  let component: UserviewavprojetComponent;
  let fixture: ComponentFixture<UserviewavprojetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserviewavprojetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserviewavprojetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
