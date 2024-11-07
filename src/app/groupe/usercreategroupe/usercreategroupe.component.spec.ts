import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsercreategroupeComponent } from './usercreategroupe.component';

describe('UsercreategroupeComponent', () => {
  let component: UsercreategroupeComponent;
  let fixture: ComponentFixture<UsercreategroupeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsercreategroupeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsercreategroupeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
