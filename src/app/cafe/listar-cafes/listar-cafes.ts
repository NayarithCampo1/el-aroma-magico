import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Cafe } from '../models/cafe';
import { CafeService } from '../services/cafe.service';

@Component({
  selector: 'app-listar-cafes',
  standalone: false,
  styleUrl: './listar-cafes.css',
  templateUrl: './listar-cafes.html',
})
export class ListarCafes implements OnInit {

  cafes: Cafe[] = [];

  constructor(
    private cafeService: CafeService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.cafeService.getCafes().subscribe({
      next: (data) => {
        this.cafes = data;
        this.cdr.markForCheck();
      },
      error: (error) => {
        console.error('Error al consultar los cafés:', error);
      }
    });
  }

  get totalOrigen(): number {
    return this.cafes.filter(
      cafe => cafe.tipo === 'Café de Origen'
    ).length;
  }

  get totalBlend(): number {
    return this.cafes.filter(
      cafe => cafe.tipo === 'Blend'
    ).length;
  }
}