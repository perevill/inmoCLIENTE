import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlistTipoviviendaComponent } from './plist-tipovivienda.component';

describe('PlistTipoviviendaComponent', () => {
  let component: PlistTipoviviendaComponent;
  let fixture: ComponentFixture<PlistTipoviviendaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlistTipoviviendaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlistTipoviviendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
