import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pagePipe'
})
export class PagePipePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    var text = value as string;
    return text.toUpperCase()
  }

}
