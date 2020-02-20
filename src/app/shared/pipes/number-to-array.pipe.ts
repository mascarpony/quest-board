import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numberToArray'
})
export class NumberToArrayPipe implements PipeTransform {

  transform(value: number): number[] {
    return new Array(value).fill(0).map((item, idx) => idx + 1);
  }

}
