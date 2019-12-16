import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeLandingComponent } from './home-landing.component';

describe('HomeLandingComponent', () => {
  let component: HomeLandingComponent;
  let fixture: ComponentFixture<HomeLandingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeLandingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
