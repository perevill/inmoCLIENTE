import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlistViviendaComponent } from './plist-vivienda.component';

describe('PlistViviendaComponent', () => {
  let component: PlistViviendaComponent;
  let fixture: ComponentFixture<PlistViviendaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlistViviendaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlistViviendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
