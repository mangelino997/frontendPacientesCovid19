import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaFilaComponent } from './tabla-fila.component';

describe('TablaFilaComponent', () => {
  let component: TablaFilaComponent;
  let fixture: ComponentFixture<TablaFilaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablaFilaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaFilaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
