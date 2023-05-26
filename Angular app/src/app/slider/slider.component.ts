import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
  imageUrls: string[] = [
    'assets/images/image1.jpg',
    'assets/images/image2.jpg',
    'assets/images/image3.jpg',
    'assets/images/image4.jpg',
    // Add more image URLs as needed
  ];
  activeIndex = 0;

  ngOnInit() {
    setInterval(() => {
      this.nextSlide();
    }, 4000);
  }

  nextSlide() {
    this.activeIndex = (this.activeIndex + 1) % this.imageUrls.length;
  }
}
