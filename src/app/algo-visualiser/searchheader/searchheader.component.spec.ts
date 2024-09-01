import { ComponentFixture, TestBed } from '@angular/core/testing';

import { searchHeaderComponent } from './searchHeader.component';

describe('searchHeaderComponent', () => {
  let component: searchHeaderComponent;
  let fixture: ComponentFixture<searchHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [searchHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(searchHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
