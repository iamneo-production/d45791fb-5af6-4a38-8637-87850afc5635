import { Component,OnInit, EventEmitter,ElementRef,Output} from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
// import { EventsService } from '../services/event-service/events.service';

@Component({
  selector: 'app-search',
  templateUrl: './list-search.component.html',
  styleUrls: ['./list-search.component.css']
})

export class ListSearchComponent implements OnInit{

  ngOnInit(): void{
  }

  constructor() {
  }
  
  enteredSearchValue: string = '';

  @Output() searchTextChanged: EventEmitter<string> = new EventEmitter<string>();

  onSearchTextChanged(){
    this.searchTextChanged.emit(this.enteredSearchValue);
  }
  
}
