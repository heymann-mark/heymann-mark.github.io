import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AstarComponent } from './astar.component';

describe('AstarComponent', () => {
  let component: AstarComponent;
  let fixture: ComponentFixture<AstarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AstarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AstarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
