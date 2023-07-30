/**
 * Description:-------------
 
 * Imported Component decorator to define & configure components. For providing configuration metadata.
 
 * Imported OnInit interface for defining ngOnInit() method.
 
 * Imported Renderer2 class service by Angular for DOM manipulation. Eg.- Element, Attributes, Styles.
 
 * Injected Renderer2 Service using contructor parameter renderer of type Renderer2.

 * Constant varible "options" is of type ScrollIntoviewOption (It is an interface for various scrolling options). Behaviour property is for smooth transition & start property is for scroll to top.

 * Refered root element which is <html> using "document.documentElement" property & called "scrollToTop()" method by passing options as argument.

**/

import { Component, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent {
  /*This constructor & ngOnInit() is for "Scroll-To-Top with Smooth-Transition" behaviour for footer links.*/
  
  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
    this.scrollToTop();
  }

  scrollToTop(): void {    
    const options: ScrollIntoViewOptions = { behavior: 'smooth', block: 'start' };
    document.documentElement.scrollIntoView(options);
  }
}
