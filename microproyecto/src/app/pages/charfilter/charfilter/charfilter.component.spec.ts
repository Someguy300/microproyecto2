import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharfilterComponent } from './charfilter.component';

describe('CharfilterComponent', () => {
  let component: CharfilterComponent;
  let fixture: ComponentFixture<CharfilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharfilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharfilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
