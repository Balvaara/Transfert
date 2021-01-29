import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OuSommeNousComponent } from './ou-somme-nous.component';

describe('OuSommeNousComponent', () => {
  let component: OuSommeNousComponent;
  let fixture: ComponentFixture<OuSommeNousComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OuSommeNousComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OuSommeNousComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
