import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChefdeprojetindexuserComponent } from './chefdeprojetindexuser.component';

describe('ChefdeprojetindexuserComponent', () => {
  let component: ChefdeprojetindexuserComponent;
  let fixture: ComponentFixture<ChefdeprojetindexuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChefdeprojetindexuserComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChefdeprojetindexuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
