import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AbsenceJustificationPage } from './absence-justification.page';

describe('AbsenceJustificationPage', () => {
  let component: AbsenceJustificationPage;
  let fixture: ComponentFixture<AbsenceJustificationPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AbsenceJustificationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
