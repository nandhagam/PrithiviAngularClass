import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appBgcolor]'
})
export class BgcolorDirective {

  constructor(private bgcolor: ElementRef) {
    this.bgcolor.nativeElement.style.background = "#26532b";
  }

}
