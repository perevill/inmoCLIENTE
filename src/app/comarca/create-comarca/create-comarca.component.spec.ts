import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateComarcaComponent } from './create-comarca.component';

describe('CreateComarcaComponent', () => {
  let component: CreateComarcaComponent;
  let fixture: ComponentFixture<CreateComarcaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateComarcaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateComarcaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
