import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LetterNameComponent } from './letter-name.component';

describe('LetterNameComponent', () => {
  let component: LetterNameComponent;
  let fixture: ComponentFixture<LetterNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LetterNameComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LetterNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
