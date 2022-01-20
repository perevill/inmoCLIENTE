import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewFavoritosComponent } from './view-favoritos.component';

describe('ViewFavoritosComponent', () => {
  let component: ViewFavoritosComponent;
  let fixture: ComponentFixture<ViewFavoritosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewFavoritosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewFavoritosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
