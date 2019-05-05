import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoPacienteTablaComponent } from './info-paciente-tabla.component';

describe('InfoPacienteTablaComponent', () => {
  let component: InfoPacienteTablaComponent;
  let fixture: ComponentFixture<InfoPacienteTablaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoPacienteTablaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoPacienteTablaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
