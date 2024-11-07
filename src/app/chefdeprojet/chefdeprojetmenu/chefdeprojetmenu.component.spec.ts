import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChefdeprojetmenuComponent } from './chefdeprojetmenu.component';

describe('ChefdeprojetmenuComponent', () => {
  let component: ChefdeprojetmenuComponent;
  let fixture: ComponentFixture<ChefdeprojetmenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChefdeprojetmenuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChefdeprojetmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
