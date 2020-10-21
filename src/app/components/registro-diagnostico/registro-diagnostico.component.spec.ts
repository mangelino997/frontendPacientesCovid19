import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroDiagnosticoComponent } from './registro-diagnostico.component';

describe('RegistroDiagnosticoComponent', () => {
  let component: RegistroDiagnosticoComponent;
  let fixture: ComponentFixture<RegistroDiagnosticoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistroDiagnosticoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroDiagnosticoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
