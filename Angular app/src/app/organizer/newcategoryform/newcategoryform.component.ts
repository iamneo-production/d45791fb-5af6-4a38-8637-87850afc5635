import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryService } from 'src/app/services/api/category.service';

@Component({
  selector: 'app-newcategoryform',
  templateUrl: './newcategoryform.component.html',
  styleUrls: ['./newcategoryform.component.css']
})
export class NewcategoryformComponent {
  category:any = {};

  constructor(private router:Router, private categoryService: CategoryService) {
  }

  userId:number=JSON.parse(localStorage.getItem("user")).id;


  addCategory(form: any) {
    console.log(form);
    
    console.log(form.value);

    this.categoryService.addCategory(form.value);
    

    this.router.navigate([`organiser/${this.userId}/createvent`])
  }

  newEvent(){
    this.router.navigate([`organiser/${this.userId}/newevent`]);
  }
  manageEvent(){
    this.router.navigate(["/event"]);
  }

  close(){
    this.router.navigate([`organiser/${this.userId}/createvent`]);
  }
}
