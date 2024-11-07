import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserindexavprojetComponent } from './userindexavprojet.component';

describe('UserindexavprojetComponent', () => {
  let component: UserindexavprojetComponent;
  let fixture: ComponentFixture<UserindexavprojetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserindexavprojetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserindexavprojetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
