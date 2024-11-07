import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserindexaffgroupeComponent } from './userindexaffgroupe.component';

describe('UserindexaffgroupeComponent', () => {
  let component: UserindexaffgroupeComponent;
  let fixture: ComponentFixture<UserindexaffgroupeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserindexaffgroupeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserindexaffgroupeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
