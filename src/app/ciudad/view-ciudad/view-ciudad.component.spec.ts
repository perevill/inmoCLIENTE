import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCiudadComponent } from './view-ciudad.component';

describe('ViewCiudadComponent', () => {
  let component: ViewCiudadComponent;
  let fixture: ComponentFixture<ViewCiudadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewCiudadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewCiudadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
