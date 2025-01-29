import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appDemo]',
  standalone: false
})
export class DemoDirective {

  constructor(private el:ElementRef ) { }
  
 ngOnInit(){
 // debugger
  this.el.nativeElement.style.bacgroundColor="yellow"
 }

//  hover effect you can use @HostListener

 @HostListener("mouseenter")onMouseEnter(){
  this.el.nativeElement.style.bacgroundColor="red"
 }
 @HostListener("mouseleave")onMouseLeave(){
  this.el.nativeElement.style.bacgroundColor="cyan"
 }
}
