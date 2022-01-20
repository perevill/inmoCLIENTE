import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlistComarcaComponent } from './plist-comarca.component';

describe('PlistComarcaComponent', () => {
  let component: PlistComarcaComponent;
  let fixture: ComponentFixture<PlistComarcaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlistComarcaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlistComarcaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
