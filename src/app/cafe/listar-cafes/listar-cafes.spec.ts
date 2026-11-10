import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListarCafes } from './listar-cafes';

describe('ListarCafes', () => {
  let component: ListarCafes;
  let fixture: ComponentFixture<ListarCafes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListarCafes],
    }).compileComponents();

    fixture = TestBed.createComponent(ListarCafes);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
