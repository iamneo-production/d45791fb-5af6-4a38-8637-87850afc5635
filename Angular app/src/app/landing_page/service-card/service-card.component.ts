import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { CategoryService } from 'src/app/services/api/category.service';

@Component({
  selector: 'app-service-card',
  templateUrl: './service-card.component.html',
  styleUrls: ['./service-card.component.css'],
})
export class ServiceCardComponent implements OnInit {
  events: any[] = [
    {
      category: 'Business & Professional Events',
      eventDescription:
        'Stay updated on industry trends, network with professionals, and explore business opportunities at conferences, trade shows, workshops, and product launches.',
      imageUrl: 'assets/Images/our_service1a.jpg',
    },
    {
      category: 'Arts & Entertainment Events',
      eventDescription:
        'Immerse yourself in the world of arts and entertainment through music concerts, art exhibitions, theater shows, film screenings, and comedy nights.',
      imageUrl: 'assets/Images/our_service2a.jpg',
    },
    {
      category: 'Sports & Fitness Events',
      eventDescription:
        'Get active and competitive by participating in marathons, sports tournaments, fitness workshops, yoga retreats, and adrenaline-pumping adventure sports events.',
      imageUrl: 'assets/Images/our_service3a.jpg',
    },
    {
      category: 'Social & Cultural Events',
      eventDescription:
        'Support a cause, experience diverse cultures, and indulge in culinary delights through charity galas, cultural festivals, food tastings, fashion shows, and community celebrations.',
      imageUrl: 'assets/Images/our_service4a.jpg',
    },
    {
      category: 'Educational & Academic Events',
      eventDescription:
        'Expand your knowledge, engage in discussions, and explore career opportunities through academic conferences, science fairs, career fairs, and educational seminars.',
      imageUrl: 'assets/Images/our_service5a.jpg',
    },
    {
      category: 'Technology & Innovation Events',
      eventDescription:
        'Dive into the world of technology and innovation by participating in hackathons, tech conventions, startup pitch events, and showcases of robotics, AI, VR, and AR.',
      imageUrl: 'assets/Images/our_service6a.jpg',
    },
    {
      category: 'Lifestyle & Wellness Events',
      eventDescription:
        'Take care of your well-being, learn new skills, and explore personal development through wellness retreats, mindfulness workshops, cooking classes, and beauty/fashion events.',
      imageUrl: 'assets/Images/our_service7a.jpg',
    },
    {
      category: 'Special Interest & Hobby Events',
      eventDescription:
        'Pursue your passions and interests through gaming tournaments, photography workshops, book readings, car shows, and outdoor adventure and travel experiences.',
      imageUrl: 'assets/Images/our_service8a.jpg',
    },
    {
      category: 'Business & Professional Events',
      eventDescription:
        'Stay updated on industry trends, network with professionals, and explore business opportunities at conferences, trade shows, workshops, and product launches.',
      imageUrl: 'assets/Images/our_service1a.jpg',
    },
    {
      category: 'Arts & Entertainment Events',
      eventDescription:
        'Immerse yourself in the world of arts and entertainment through music concerts, art exhibitions, theater shows, film screenings, and comedy nights.',
      imageUrl: 'assets/Images/our_service2a.jpg',
    },
  ];

  handleCardHover(event: MouseEvent): void {
    const cardContent = event.currentTarget as HTMLElement;
    const icon = cardContent.querySelector('.fa-solid') as HTMLElement;

    if (icon) {
      if (event.type === 'mouseover') {
        cardContent.style.backgroundColor = '#0f4c75';
        icon.style.color = '#fff';
      } else if (event.type === 'mouseout') {
        cardContent.style.backgroundColor = '';
        icon.style.color = '#0f4c75';
      }
    }
  }

  menuType: string = '';

  constructor(private router: Router, private categoryService: CategoryService) { }

  categoryList: any[]

  ngOnInit(): void {
    this.setMenuType(this.router.url);

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.setMenuType(event.url);
      }
    });

    this.categoryService.getCategories().subscribe(
      {
        next: (response) => {
          this.categoryList = response;
          console.log(this.categoryList);
          let newCategoryList = this.events;
          this.categoryList.forEach(element => {
            let category = {
              category: element.categoryName, eventDescription:
                element.categoryDescription,
              imageUrl: element.categoryImageUrl,
            }

            newCategoryList.push(category)
          });
          this.events = newCategoryList
        },
        error: (err) => console.log(err)
      }
    )

    console.log(this.categoryList)
  }

  setMenuType(url: string): void {
    if (url.includes('/categories')) {
      this.menuType = "/categories";
    }
  }
}
