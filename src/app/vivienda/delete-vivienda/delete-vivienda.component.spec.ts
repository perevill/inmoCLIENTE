import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteViviendaComponent } from './delete-vivienda.component';

describe('DeleteViviendaComponent', () => {
  let component: DeleteViviendaComponent;
  let fixture: ComponentFixture<DeleteViviendaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteViviendaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteViviendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
