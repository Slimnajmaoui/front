import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserviewavtacheComponent } from './userviewavtache.component';

describe('UserviewavtacheComponent', () => {
  let component: UserviewavtacheComponent;
  let fixture: ComponentFixture<UserviewavtacheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserviewavtacheComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserviewavtacheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
