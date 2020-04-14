import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartenerComponent } from './partener.component';

describe('PartenerComponent', () => {
  let component: PartenerComponent;
  let fixture: ComponentFixture<PartenerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartenerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartenerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
