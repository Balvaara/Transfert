import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrerCompteComponent } from './crer-compte.component';

describe('CrerCompteComponent', () => {
  let component: CrerCompteComponent;
  let fixture: ComponentFixture<CrerCompteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrerCompteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrerCompteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
