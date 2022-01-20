import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlistCiudadComponent } from './plist-ciudad.component';

describe('PlistCiudadComponent', () => {
  let component: PlistCiudadComponent;
  let fixture: ComponentFixture<PlistCiudadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlistCiudadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlistCiudadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
