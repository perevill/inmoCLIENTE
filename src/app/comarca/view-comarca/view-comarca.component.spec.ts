import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewComarcaComponent } from './view-comarca.component';

describe('ViewComarcaComponent', () => {
  let component: ViewComarcaComponent;
  let fixture: ComponentFixture<ViewComarcaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewComarcaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewComarcaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
