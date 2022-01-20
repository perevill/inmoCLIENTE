import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditViviendaComponent } from './edit-vivienda.component';

describe('EditViviendaComponent', () => {
  let component: EditViviendaComponent;
  let fixture: ComponentFixture<EditViviendaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditViviendaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditViviendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
