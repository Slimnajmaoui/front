import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChefdeprojetindexadminComponent } from './chefdeprojetindexadmin.component';

describe('ChefdeprojetindexadminComponent', () => {
  let component: ChefdeprojetindexadminComponent;
  let fixture: ComponentFixture<ChefdeprojetindexadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChefdeprojetindexadminComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChefdeprojetindexadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
