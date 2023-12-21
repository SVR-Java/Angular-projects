import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBeterHighlighter]'
})
export class BeterHighlighterDirective {

  constructor(private element:ElementRef, private renderer :Renderer2) {
   //@HostBinding('style.backgroundcolor') background: string = 'transparent';
   }
   @HostBinding('style.backgroundColor') background:string ='transparent';
   @HostBinding('style.border') border:string ='none'
   @HostListener('mouseenter') mouseEnter(){
    this.background ='pink';
    this.border='2px green solid';
   }

   @HostListener('mouseleave') mouseOut(){
    this.background ='transparent';
    this.border='none';
   }
}
