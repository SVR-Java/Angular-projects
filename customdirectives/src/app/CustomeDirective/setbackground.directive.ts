import { Directive, ElementRef, OnInit } from "@angular/core";

@Directive({
selector : '[setBackground]'
})
export class setBackgroundDirective implements OnInit{
   // private  element: ElementRef;
    constructor(private element: ElementRef){
        this.element = element;
        //let el = element.nativeElement;
    //el.setAttribute('style', 'color: white; background: green');
        //element.nativeElement.style.setBackground='green';
    }
   // private  element ElementRef = null;
    ngOnInit(){
        let el = this.element.nativeElement;
   el.setAttribute('style', 'color: white; background: green');
    }
}