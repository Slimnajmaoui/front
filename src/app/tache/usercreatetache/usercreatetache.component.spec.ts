import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsercreatetacheComponent } from './usercreatetache.component';

describe('UsercreatetacheComponent', () => {
  let component: UsercreatetacheComponent;
  let fixture: ComponentFixture<UsercreatetacheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsercreatetacheComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsercreatetacheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
