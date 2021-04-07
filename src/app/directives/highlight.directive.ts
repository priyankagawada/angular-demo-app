import { Directive } from '@angular/core';

// [] means it is an attribute directive
@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor() {
    console.log("Directive object instantiated")
   }

}
