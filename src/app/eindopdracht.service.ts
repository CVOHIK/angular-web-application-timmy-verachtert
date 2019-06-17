import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class EindopdrachtService {

  constructor(private http:HttpClient) { }

  getOpenData(){
    let observable = this.http.get("https://geodata.antwerpen.be/arcgissql/rest/services/P_Portal/portal_publiek2/MapServer/95/query?where=1%3D1&outFields=*&outSR=4326&f=json");
    return observable;
  }
}
