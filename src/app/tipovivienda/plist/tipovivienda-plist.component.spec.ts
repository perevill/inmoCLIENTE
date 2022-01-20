import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlistComponent } from './tipovivienda-plist.component';

describe('PlistComponent', () => {
  let component: PlistComponent;
  let fixture: ComponentFixture<PlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});