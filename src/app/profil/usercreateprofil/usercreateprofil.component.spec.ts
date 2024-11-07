import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsercreateprofilComponent } from './usercreateprofil.component';

describe('UsercreateprofilComponent', () => {
  let component: UsercreateprofilComponent;
  let fixture: ComponentFixture<UsercreateprofilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsercreateprofilComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsercreateprofilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
