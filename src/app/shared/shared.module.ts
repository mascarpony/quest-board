import { NgModule } from '@angular/core';
import { NumberToArrayPipe } from './pipes/number-to-array.pipe';

import {
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatSelectModule,
  MatToolbarModule
} from '@angular/material';
import { FilterPipe } from './pipes/filter.pipe';

const MAT_MODULES = [
  MatCardModule,
  MatButtonModule,
  MatToolbarModule,
  MatIconModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
];

@NgModule({
  declarations: [NumberToArrayPipe, FilterPipe],
  imports: [...MAT_MODULES],
  exports: [
    NumberToArrayPipe,
    ...MAT_MODULES,
    FilterPipe
  ]
})
export class SharedModule { }
