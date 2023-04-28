import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'uppercaseDev',
})
export class UppercaseDevPipe implements PipeTransform {
  transform(value: string): string {
    return value.toUpperCase();
  }
}
