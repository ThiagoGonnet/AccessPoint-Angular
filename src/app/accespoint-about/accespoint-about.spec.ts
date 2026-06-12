import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccespointAbout } from './accespoint-about';

describe('AccespointAbout', () => {
  let component: AccespointAbout;
  let fixture: ComponentFixture<AccespointAbout>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AccespointAbout],
    }).compileComponents();

    fixture = TestBed.createComponent(AccespointAbout);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
