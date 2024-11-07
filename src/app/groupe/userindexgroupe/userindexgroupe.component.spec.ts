import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserindexgroupeComponent } from './userindexgroupe.component';

describe('UserindexgroupeComponent', () => {
  let component: UserindexgroupeComponent;
  let fixture: ComponentFixture<UserindexgroupeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserindexgroupeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserindexgroupeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
