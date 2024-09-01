import { ComponentFixture, TestBed } from '@angular/core/testing';

import { sortHeaderComponent } from './sortHeader.component';

describe('sortHeaderComponent', () => {
  let component: sortHeaderComponent;
  let fixture: ComponentFixture<sortHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [sortHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(sortHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
