import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsercreateaffprojetComponent } from './usercreateaffprojet.component';

describe('UsercreateaffprojetComponent', () => {
  let component: UsercreateaffprojetComponent;
  let fixture: ComponentFixture<UsercreateaffprojetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsercreateaffprojetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsercreateaffprojetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
