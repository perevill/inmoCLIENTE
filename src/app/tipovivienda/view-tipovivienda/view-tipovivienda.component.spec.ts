import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTipoviviendaComponent } from './view-tipovivienda.component';

describe('ViewTipoviviendaComponent', () => {
  let component: ViewTipoviviendaComponent;
  let fixture: ComponentFixture<ViewTipoviviendaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewTipoviviendaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewTipoviviendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
