import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsercreateadminComponent } from './usercreateadmin.component';

describe('UsercreateadminComponent', () => {
  let component: UsercreateadminComponent;
  let fixture: ComponentFixture<UsercreateadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsercreateadminComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsercreateadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
