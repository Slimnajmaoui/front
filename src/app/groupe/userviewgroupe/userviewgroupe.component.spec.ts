import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserviewgroupeComponent } from './userviewgroupe.component';

describe('UserviewgroupeComponent', () => {
  let component: UserviewgroupeComponent;
  let fixture: ComponentFixture<UserviewgroupeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserviewgroupeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserviewgroupeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
