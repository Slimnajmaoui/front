import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChefdeprojetviewadminComponent } from './chefdeprojetviewadmin.component';

describe('ChefdeprojetviewadminComponent', () => {
  let component: ChefdeprojetviewadminComponent;
  let fixture: ComponentFixture<ChefdeprojetviewadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChefdeprojetviewadminComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChefdeprojetviewadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
