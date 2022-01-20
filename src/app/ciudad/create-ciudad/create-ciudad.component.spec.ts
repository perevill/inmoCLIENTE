import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCiudadComponent } from './create-ciudad.component';

describe('CreateCiudadComponent', () => {
  let component: CreateCiudadComponent;
  let fixture: ComponentFixture<CreateCiudadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateCiudadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCiudadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
