import { NgModule } from '@angular/core';
import { NumberToArrayPipe } from './pipes/number-to-array.pipe';

import {
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatSelectModule,
  MatToolbarModule,
  MatProgressSpinnerModule
} from '@angular/material';

const MAT_MODULES = [
  MatCardModule,
  MatButtonModule,
  MatToolbarModule,
  MatIconModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatProgressSpinnerModule
];

@NgModule({
  declarations: [NumberToArrayPipe],
  imports: [...MAT_MODULES],
  exports: [
    NumberToArrayPipe,
    ...MAT_MODULES
  ]
})
export class SharedModule { }
