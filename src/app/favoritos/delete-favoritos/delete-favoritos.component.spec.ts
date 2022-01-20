import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteFavoritosComponent } from './delete-favoritos.component';

describe('DeleteFavoritosComponent', () => {
  let component: DeleteFavoritosComponent;
  let fixture: ComponentFixture<DeleteFavoritosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteFavoritosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteFavoritosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
