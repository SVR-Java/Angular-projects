import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective {

  constructor(private elemet : ElementRef, private renderer : Renderer2) {


   }
   @HostListener('mouseenter') onMouseOver(){
    this.renderer.setStyle(this.elemet.nativeElement,'margin','5px 10px');
    this.renderer.setStyle(this.elemet.nativeElement,'padding','30px 30px');
    this.renderer.setStyle(this.elemet.nativeElement,'transition','0.5s');
   }
   @HostListener('mouseleave') onMouseOut(){
    this.renderer.setStyle(this.elemet.nativeElement,'margin','30Px 30px');
    this.renderer.setStyle(this.elemet.nativeElement,'padding','10px 10px');
    this.renderer.setStyle(this.elemet.nativeElement,'transition','0.5s');
   }
}
