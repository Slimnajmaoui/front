import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UseredituserComponent } from './useredituser.component';

describe('UseredituserComponent', () => {
  let component: UseredituserComponent;
  let fixture: ComponentFixture<UseredituserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UseredituserComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UseredituserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
