import { Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';

// [] means it is an attribute directive
// <h1 appHighlight='red'/>

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit{

  // property to match with selector name to accept input
  @Input()
  appHighlight:string;
 
  //color:string = 'yellow';
  e1:ElementRef;

  // The ElementRef provides regerence for HSOT element inside directive
  constructor(e1: ElementRef) {
    console.log("Directive object instantiated");
    this.e1 = e1;
    //e1.nativeElement.style.backgroundColor = this.color;
   }

   // validate the input properties or invoke services
   ngOnInit(){
     console.log(`ngOnInit called from directive class ${this.appHighlight}`); 
   }

   // Binding events to a function
   @HostListener('mouseenter') 
   onMouseEnter() {
    //this.highlight('green');
    this.highlight(this.appHighlight)
  }

  @HostListener('mouseleave') 
   onMouseLeave() {
    this.highlight(null);
  }

  private highlight(color:string)
  {
    this.e1.nativeElement.style.backgroundColor = color ;
  }
}
