import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlistZonaComponent } from './plist-zona.component';

describe('PlistZonaComponent', () => {
  let component: PlistZonaComponent;
  let fixture: ComponentFixture<PlistZonaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlistZonaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlistZonaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
