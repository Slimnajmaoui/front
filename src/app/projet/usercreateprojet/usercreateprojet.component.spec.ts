import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsercreateprojetComponent } from './usercreateprojet.component';

describe('UsercreateprojetComponent', () => {
  let component: UsercreateprojetComponent;
  let fixture: ComponentFixture<UsercreateprojetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsercreateprojetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsercreateprojetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
