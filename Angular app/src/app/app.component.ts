import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'EM_Site';

  constructor(){
    localStorage.setItem("BASE_URL","https://8080-"+ window.location.host.split('-')[1]);
  }
}
