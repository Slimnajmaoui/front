import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsercreateafftacheComponent } from './usercreateafftache.component';

describe('UsercreateafftacheComponent', () => {
  let component: UsercreateafftacheComponent;
  let fixture: ComponentFixture<UsercreateafftacheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsercreateafftacheComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsercreateafftacheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
