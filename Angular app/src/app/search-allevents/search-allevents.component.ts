import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-allevents',
  templateUrl: './search-allevents.component.html',
  styleUrls: ['./search-allevents.component.css']
})
export class SearchAlleventsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(event: Event) {
    event.preventDefault();
    const searchBox = document.querySelector('.search-box') as HTMLInputElement;
    const searchQuery = searchBox.value;
    console.log('Search query:', searchQuery);
  }

}
