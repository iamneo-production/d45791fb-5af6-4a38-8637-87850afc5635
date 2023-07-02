import { Component, OnInit } from '@angular/core';

interface ImageData {
  url: string;
  heading: string;
  description: string;
  button: string;
}

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'],
})
export class SliderComponent implements OnInit{
  imageUrls: ImageData[] = [
    {
      url: 'assets/Images/image1.jpg',
      heading: 'Discover Your Perfect Event',
      description: 'Explore the Ultimate Event Management Portal',
      button: 'Know More',
    },
    {
      url: 'assets/Images/image2.jpg',
      heading: 'Celebrate in Style',
      description: 'Discover Unforgettable Festivals and Special Events',
      button: 'Know More',
    },
    {
      url: 'assets/Images/image3.jpg',
      heading: 'Get Your Tickets Now',
      description: 'Secure Your Spot at the Hottest Events',
      button: 'Book Now',
    },
    {
      url: 'assets/Images/image4.jpg',
      heading: 'Unleash Your Inner Athlete',
      description: 'Explore Thrilling Sports Events',
      button: 'View Events',
    },
    // 'assets/images/image1.jpg',
    // 'assets/images/image2.jpg',
    // 'assets/images/image3.jpg',
    // 'assets/images/image4.jpg',
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
