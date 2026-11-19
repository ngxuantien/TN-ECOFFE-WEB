import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'vnd',
})
export class VndPipe implements PipeTransform {
  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }
}
