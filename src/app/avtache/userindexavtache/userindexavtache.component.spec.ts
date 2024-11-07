import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserindexavtacheComponent } from './userindexavtache.component';

describe('UserindexavtacheComponent', () => {
  let component: UserindexavtacheComponent;
  let fixture: ComponentFixture<UserindexavtacheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserindexavtacheComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserindexavtacheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
