import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForrConnexionComponent } from './forr-connexion.component';

describe('ForrConnexionComponent', () => {
  let component: ForrConnexionComponent;
  let fixture: ComponentFixture<ForrConnexionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForrConnexionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForrConnexionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
