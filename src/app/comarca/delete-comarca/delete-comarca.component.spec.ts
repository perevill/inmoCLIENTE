import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteComarcaComponent } from './delete-comarca.component';

describe('DeleteComarcaComponent', () => {
  let component: DeleteComarcaComponent;
  let fixture: ComponentFixture<DeleteComarcaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteComarcaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteComarcaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
