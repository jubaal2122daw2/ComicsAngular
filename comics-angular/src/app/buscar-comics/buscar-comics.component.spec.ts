import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarComicsComponent } from './buscar-comics.component';

describe('BuscarComicsComponent', () => {
  let component: BuscarComicsComponent;
  let fixture: ComponentFixture<BuscarComicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscarComicsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscarComicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
