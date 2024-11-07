import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UseredittacheComponent } from './useredittache.component';

describe('UseredittacheComponent', () => {
  let component: UseredittacheComponent;
  let fixture: ComponentFixture<UseredittacheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UseredittacheComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UseredittacheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
