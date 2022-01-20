import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditComarcaComponent } from './edit-comarca.component';

describe('EditComarcaComponent', () => {
  let component: EditComarcaComponent;
  let fixture: ComponentFixture<EditComarcaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditComarcaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditComarcaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
