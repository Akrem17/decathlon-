import { Injectable } from '@angular/core';
import { HttpClient }  from '@angular/common/http'
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class DecathlonService {

  constructor(private http : HttpClient) { }


  getSports():Observable<any>{
    return this.http.get("https://sports.api.decathlon.com/sports");

  }
}
