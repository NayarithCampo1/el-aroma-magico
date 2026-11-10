
import { TestBed } from '@angular/core/testing';
import { App } from './app';
import { AppModule } from './app-module';
import { CafeService } from './cafe/services/cafe.service';
import { of } from 'rxjs';

describe('App', () => {

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppModule],
      providers: [
        {
          provide: CafeService,
          useValue: {
            getCafes: () => of([])
          }
        }
      ]
    }).compileComponents();
  });

  it('debería crear la aplicación', () => {
    const fixture = TestBed.createComponent(App);
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('debería mostrar el componente de listado de cafés', () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();

    const elemento = fixture.nativeElement as HTMLElement;

    expect(
      elemento.querySelector('app-listar-cafes')
    ).toBeTruthy();
  });

});
