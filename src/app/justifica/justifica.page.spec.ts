import { ComponentFixture, TestBed } from '@angular/core/testing';
import { JustificaPage } from './justifica.page';

describe('JustificaPage', () => {
  let component: JustificaPage;
  let fixture: ComponentFixture<JustificaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(JustificaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
