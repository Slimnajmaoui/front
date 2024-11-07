import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChefdeprojetheaderComponent } from './chefdeprojetheader.component';

describe('ChefdeprojetheaderComponent', () => {
  let component: ChefdeprojetheaderComponent;
  let fixture: ComponentFixture<ChefdeprojetheaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChefdeprojetheaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChefdeprojetheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
