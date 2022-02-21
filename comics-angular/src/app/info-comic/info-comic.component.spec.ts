import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoComicComponent } from './info-comic.component';

describe('InfoComicComponent', () => {
  let component: InfoComicComponent;
  let fixture: ComponentFixture<InfoComicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoComicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoComicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
