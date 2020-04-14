import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListedepotComponent } from './listedepot.component';

describe('ListedepotComponent', () => {
  let component: ListedepotComponent;
  let fixture: ComponentFixture<ListedepotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListedepotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListedepotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
