import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsercreatecongeComponent } from './usercreateconge.component';

describe('UsercreatecongeComponent', () => {
  let component: UsercreatecongeComponent;
  let fixture: ComponentFixture<UsercreatecongeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsercreatecongeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsercreatecongeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
