
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { ListarCafes } from './listar-cafes';
import { CafeService } from '../services/cafe.service';
import { Cafe } from '../models/cafe';
import { CommonModule } from '@angular/common';

describe('ListarCafes', () => {
  let component: ListarCafes;
  let fixture: ComponentFixture<ListarCafes>;

  const cafesMock: Cafe[] = [
    new Cafe(1, 'Café A', 'Café de Origen', 'Nariño', 'Dulce', 1800, 'imagen1.jpg'),
    new Cafe(2, 'Café B', 'Blend', 'Antioquia', 'Suave', 1600, 'imagen2.jpg'),
    new Cafe(3, 'Café C', 'Café de Origen', 'Huila', 'Frutal', 1700, 'imagen3.jpg')
  ];

  const cafeServiceMock = {
    getCafes: () => of(cafesMock)
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListarCafes],
      imports: [CommonModule],
      providers: [
        { provide: CafeService, useValue: cafeServiceMock }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(ListarCafes);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('debería crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('debería mostrar tres cafés en la tabla', () => {
    const filas = fixture.nativeElement.querySelectorAll('tbody tr');
    expect(filas.length).toBe(3);
  });

  it('debería mostrar una fila de encabezado y tres filas de datos', () => {
    const encabezados = fixture.nativeElement.querySelectorAll('thead tr');
    const filasDatos = fixture.nativeElement.querySelectorAll('tbody tr');

    expect(encabezados.length + filasDatos.length).toBe(4);
  });
});
