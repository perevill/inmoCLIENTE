import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteTipoviviendaComponent } from './delete-tipovivienda.component';

describe('DeleteTipoviviendaComponent', () => {
  let component: DeleteTipoviviendaComponent;
  let fixture: ComponentFixture<DeleteTipoviviendaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteTipoviviendaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteTipoviviendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
