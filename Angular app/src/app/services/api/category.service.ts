import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

interface CategoryInput {
  categoryName:string;
  categoryImageUrl:string;
  categoryDescription:string;
}

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  BASE_URL: string = `${localStorage.getItem("BASE_URL")}/categories`;

  constructor(private http: HttpClient) { }

  addCategory(input: CategoryInput) {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    console.log("event insert ");
    
    return this.http
      .post<CategoryInput>(this.BASE_URL, input, {
        headers,
        responseType: 'text' as 'json',
      })
      .subscribe(
        (data) => {
          console.log(data); 
        },
        (err) => {
          console.log(err);
        }
      );
  }

  getCategories() {
    return this.http
      .get<CategoryInput[]>(this.BASE_URL);
  }
}
