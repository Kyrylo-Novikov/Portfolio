import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferencComponent } from './referenc-item.component';

describe('ReferencComponent', () => {
  let component: ReferencComponent;
  let fixture: ComponentFixture<ReferencComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReferencComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ReferencComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
