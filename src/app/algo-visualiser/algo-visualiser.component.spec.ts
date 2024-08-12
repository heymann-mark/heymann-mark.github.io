import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlgoVisualiserComponent } from './algo-visualiser.component';

describe('AlgoVisualiserComponent', () => {
  let component: AlgoVisualiserComponent;
  let fixture: ComponentFixture<AlgoVisualiserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlgoVisualiserComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlgoVisualiserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
