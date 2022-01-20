import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCiudadComponent } from './edit-ciudad.component';

describe('EditCiudadComponent', () => {
  let component: EditCiudadComponent;
  let fixture: ComponentFixture<EditCiudadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditCiudadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCiudadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
