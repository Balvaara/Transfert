import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeAffectComponent } from './liste-affect.component';

describe('ListeAffectComponent', () => {
  let component: ListeAffectComponent;
  let fixture: ComponentFixture<ListeAffectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeAffectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeAffectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
