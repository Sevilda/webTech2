import { Injectable } from '@angular/core';
import  {HttpClient} from '@angular/common/http';
import { Sweet } from '../model/Sweet';


@Injectable({
  providedIn: 'root'
})
export class SweetsService {
  url = 'http://localhost:8080/'
  sweets: Sweet[];

  constructor(private http: HttpClient) { }

  //new sweet
  newSweet (sweet: Sweet) {
    return this.http.post<Sweet>(this.url+ 'api/new_sweet', sweet).toPromise();
  }

  //get all sweets
  async getAllSweets() {
  return await this.http.get<Sweet[]>(this.url + 'api/sweets').toPromise();
  }
  
  async updateSweet(sweet: Sweet) {
  return await this.http.put<Sweet[]>(this.url + 'api/sweets/' + sweet._id, sweet).toPromise();
  }

}



