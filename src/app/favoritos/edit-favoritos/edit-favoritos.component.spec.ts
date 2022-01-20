import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditFavoritosComponent } from './edit-favoritos.component';

describe('EditFavoritosComponent', () => {
  let component: EditFavoritosComponent;
  let fixture: ComponentFixture<EditFavoritosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditFavoritosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditFavoritosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
