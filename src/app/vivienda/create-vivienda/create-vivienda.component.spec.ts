import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateViviendaComponent } from './create-vivienda.component';

describe('CreateViviendaComponent', () => {
  let component: CreateViviendaComponent;
  let fixture: ComponentFixture<CreateViviendaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateViviendaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateViviendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
