import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'artistStatus',
})
export class ArtistStatusPipe implements PipeTransform {
  transform(value: number, ...args: unknown[]): string {
    if (value == 1) {
      return 'HABILITADO E CREDENCIADO';
    }

    return '';
  }
}
