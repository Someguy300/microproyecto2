import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MisfavComponent } from './misfav.component';

describe('MisfavComponent', () => {
  let component: MisfavComponent;
  let fixture: ComponentFixture<MisfavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MisfavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MisfavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
