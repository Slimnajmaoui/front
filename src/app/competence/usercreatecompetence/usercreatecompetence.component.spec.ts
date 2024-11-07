import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsercreatecompetenceComponent } from './usercreatecompetence.component';

describe('UsercreatecompetenceComponent', () => {
  let component: UsercreatecompetenceComponent;
  let fixture: ComponentFixture<UsercreatecompetenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsercreatecompetenceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsercreatecompetenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
