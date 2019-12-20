import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminVdetailsComponent } from './admin-vdetails.component';

describe('AdminVdetailsComponent', () => {
  let component: AdminVdetailsComponent;
  let fixture: ComponentFixture<AdminVdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminVdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminVdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
