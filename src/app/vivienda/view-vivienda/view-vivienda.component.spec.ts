import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewViviendaComponent } from './view-vivienda.component';

describe('ViewViviendaComponent', () => {
  let component: ViewViviendaComponent;
  let fixture: ComponentFixture<ViewViviendaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewViviendaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewViviendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
