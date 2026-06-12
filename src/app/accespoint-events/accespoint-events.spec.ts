import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccespointEvents } from './accespoint-events';

describe('AccespointEvents', () => {
  let component: AccespointEvents;
  let fixture: ComponentFixture<AccespointEvents>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AccespointEvents],
    }).compileComponents();

    fixture = TestBed.createComponent(AccespointEvents);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
