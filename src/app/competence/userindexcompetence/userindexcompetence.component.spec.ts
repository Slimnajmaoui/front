import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserindexcompetenceComponent } from './userindexcompetence.component';

describe('UserindexcompetenceComponent', () => {
  let component: UserindexcompetenceComponent;
  let fixture: ComponentFixture<UserindexcompetenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserindexcompetenceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserindexcompetenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
