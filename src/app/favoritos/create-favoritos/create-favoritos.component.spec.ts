import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateFavoritosComponent } from './create-favoritos.component';

describe('CreateFavoritosComponent', () => {
  let component: CreateFavoritosComponent;
  let fixture: ComponentFixture<CreateFavoritosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateFavoritosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateFavoritosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
