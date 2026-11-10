import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarCafes } from './listar-cafes/listar-cafes';

@NgModule({
  declarations: [ListarCafes],
  imports: [CommonModule],
  exports: [ListarCafes]
})
export class CafeModule {}