import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserviewaffgroupeComponent } from './userviewaffgroupe.component';

describe('UserviewaffgroupeComponent', () => {
  let component: UserviewaffgroupeComponent;
  let fixture: ComponentFixture<UserviewaffgroupeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserviewaffgroupeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserviewaffgroupeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
