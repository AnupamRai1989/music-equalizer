import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BandComponent } from './band.component';

describe('BandComponent', () => {
  let component: BandComponent;
  let fixture: ComponentFixture<BandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
