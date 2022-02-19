import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComicTemplateComponent } from './comic-template.component';

describe('ComicTemplateComponent', () => {
  let component: ComicTemplateComponent;
  let fixture: ComponentFixture<ComicTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComicTemplateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComicTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
