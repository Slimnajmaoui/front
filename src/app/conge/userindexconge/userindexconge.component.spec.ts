import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserindexcongeComponent } from './userindexconge.component';

describe('UserindexcongeComponent', () => {
  let component: UserindexcongeComponent;
  let fixture: ComponentFixture<UserindexcongeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserindexcongeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserindexcongeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
