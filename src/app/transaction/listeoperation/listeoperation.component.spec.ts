import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeoperationComponent } from './listeoperation.component';

describe('ListeoperationComponent', () => {
  let component: ListeoperationComponent;
  let fixture: ComponentFixture<ListeoperationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeoperationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeoperationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
