import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BubblesortComponent } from './bubblesort.component';

describe('BubblesortComponent', () => {
  let component: BubblesortComponent;
  let fixture: ComponentFixture<BubblesortComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BubblesortComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BubblesortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
