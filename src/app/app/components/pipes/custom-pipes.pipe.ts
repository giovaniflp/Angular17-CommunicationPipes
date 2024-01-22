import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customPipes',
  standalone: true
})
export class CustomPipesPipe implements PipeTransform {

  transform(value: string, args?: string) {
    if (args === "argumentoCustomizado"){
      return value.split('')
    }

    return value
  }

}
