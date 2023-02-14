import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'custom'
})
export class CustomPipe implements PipeTransform {
  
  transform(value: string) {
    return `Cidade: ${value}`
  }
  
}