import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTipoviviendaComponent } from './create-tipovivienda.component';

describe('CreateTipoviviendaComponent', () => {
  let component: CreateTipoviviendaComponent;
  let fixture: ComponentFixture<CreateTipoviviendaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateTipoviviendaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateTipoviviendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
