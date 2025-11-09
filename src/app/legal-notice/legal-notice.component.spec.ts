import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LegalNotesComponent } from './legal-notice.component';

describe('LegalNotesComponent', () => {
  let component: LegalNotesComponent;
  let fixture: ComponentFixture<LegalNotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LegalNotesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LegalNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
