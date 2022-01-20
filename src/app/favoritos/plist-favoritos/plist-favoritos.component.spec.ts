import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlistFavoritosComponent } from './plist-favoritos.component';

describe('PlistFavoritosComponent', () => {
  let component: PlistFavoritosComponent;
  let fixture: ComponentFixture<PlistFavoritosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlistFavoritosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlistFavoritosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
