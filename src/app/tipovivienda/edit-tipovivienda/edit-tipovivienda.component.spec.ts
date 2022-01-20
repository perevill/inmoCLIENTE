import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTipoviviendaComponent } from './edit-tipovivienda.component';

describe('EditTipoviviendaComponent', () => {
  let component: EditTipoviviendaComponent;
  let fixture: ComponentFixture<EditTipoviviendaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditTipoviviendaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTipoviviendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
