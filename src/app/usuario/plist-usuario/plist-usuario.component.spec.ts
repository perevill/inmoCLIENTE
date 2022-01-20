import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlistUsuarioComponent } from './plist-usuario.component';

describe('PlistUsuarioComponent', () => {
  let component: PlistUsuarioComponent;
  let fixture: ComponentFixture<PlistUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlistUsuarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlistUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
