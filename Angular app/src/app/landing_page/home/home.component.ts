import { Component, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  /*This constructor & ngOnInit() is for "Scroll-To-Top with Smooth-Transition" behaviour for footer links.*/

  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {
    this.scrollToTop();
  }

  scrollToTop(): void {
    const options: ScrollIntoViewOptions = {
      behavior: 'smooth',
      block: 'start',
    };
    document.documentElement.scrollIntoView(options);
  }
}
