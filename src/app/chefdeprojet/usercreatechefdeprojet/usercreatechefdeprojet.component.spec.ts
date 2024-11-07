import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsercreatechefdeprojetComponent } from './usercreatechefdeprojet.component';

describe('UsercreatechefdeprojetComponent', () => {
  let component: UsercreatechefdeprojetComponent;
  let fixture: ComponentFixture<UsercreatechefdeprojetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsercreatechefdeprojetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsercreatechefdeprojetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
