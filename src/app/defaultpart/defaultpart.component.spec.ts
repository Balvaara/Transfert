import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultpartComponent } from './defaultpart.component';

describe('DefaultpartComponent', () => {
  let component: DefaultpartComponent;
  let fixture: ComponentFixture<DefaultpartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DefaultpartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefaultpartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
