import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyStaticComponent } from './my-static.component';

describe('MyStaticComponent', () => {
  let component: MyStaticComponent;
  let fixture: ComponentFixture<MyStaticComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyStaticComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyStaticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
