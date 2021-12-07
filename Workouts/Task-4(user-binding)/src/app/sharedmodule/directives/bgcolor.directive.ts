import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appBgcolor]'
})
export class BgcolorDirective {

  constructor(private bgcolor: ElementRef) {
    this.bgcolor.nativeElement.style.background = "#26532b";
  }
  @HostListener('mouseover') setbgColor1() {
    this.bgcolor.nativeElement.style.background = "#FD151B";
  }
  @HostListener('mouseout') setbgColor2() {
    this.bgcolor.nativeElement.style.background = "#AFA98D";
  }

}
