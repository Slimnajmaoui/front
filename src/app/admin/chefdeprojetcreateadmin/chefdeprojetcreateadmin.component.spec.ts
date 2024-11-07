import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChefdeprojetcreateadminComponent } from './chefdeprojetcreateadmin.component';

describe('ChefdeprojetcreateadminComponent', () => {
  let component: ChefdeprojetcreateadminComponent;
  let fixture: ComponentFixture<ChefdeprojetcreateadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChefdeprojetcreateadminComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChefdeprojetcreateadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
