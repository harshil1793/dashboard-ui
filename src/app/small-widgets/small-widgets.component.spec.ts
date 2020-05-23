import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallWidgetsComponent } from './small-widgets.component';

describe('SmallWidgetsComponent', () => {
  let component: SmallWidgetsComponent;
  let fixture: ComponentFixture<SmallWidgetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmallWidgetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmallWidgetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
