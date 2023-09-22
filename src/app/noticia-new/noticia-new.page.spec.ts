import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoticiaNewPage } from './noticia-new.page';

describe('NoticiaNewPage', () => {
  let component: NoticiaNewPage;
  let fixture: ComponentFixture<NoticiaNewPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(NoticiaNewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
