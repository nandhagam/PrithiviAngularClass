import { Directive, ElementRef, HostBinding, HostListener, OnInit } from '@angular/core';

@Directive({
  selector: '[appBgcolor]'
})
export class BgcolorDirective implements OnInit {

  constructor(private bgColor: ElementRef) {
    this.bgColor.nativeElement.style.background = "#26532b";
  }
  @HostListener('mouseover') setBgColor1() {
    this.bgColor.nativeElement.style.background = "#FD151B";
  }
  @HostListener('mouseout') setBgColor2() {
    this.bgColor.nativeElement.style.background = "#AFA98D";
  }
  @HostBinding('style.color') color: string = '';

  ngOnInit() {
    this.color = "#fff";
  }

}
