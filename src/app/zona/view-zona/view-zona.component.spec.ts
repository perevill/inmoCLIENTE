import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewZonaComponent } from './view-zona.component';

describe('ViewZonaComponent', () => {
  let component: ViewZonaComponent;
  let fixture: ComponentFixture<ViewZonaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewZonaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewZonaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
