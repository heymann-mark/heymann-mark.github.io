import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlgoheaderComponent } from './algoheader.component';

describe('AlgoheaderComponent', () => {
  let component: AlgoheaderComponent;
  let fixture: ComponentFixture<AlgoheaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlgoheaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlgoheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
