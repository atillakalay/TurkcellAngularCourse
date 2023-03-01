import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCustom]'
})
export class CustomDirective {

  constructor(private element: ElementRef) {
    element.nativeElement.style.backgroundColor = 'red'
    alert("Custom Directive")
  }
}
