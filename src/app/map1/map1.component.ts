import { Component, OnInit } from '@angular/core';
import { EindopdrachtService } from '../eindopdracht.service';

@Component({
  selector: 'app-map1',
  templateUrl: './map1.component.html',
  styleUrls: ['./map1.component.css']
})
export class Map1Component implements OnInit {
  data:any[];
  title: string = "Map1";
  lat: number = 51.678418;
  lng: number = 7.809007;
  EindopdrachtService: any;
  
  onChoseLocation(event){
    console.log(event);
    this.lat = event.coords.lat;
    this.lng = event.coords.lng;
  }


  getOpenData(){
    this.EindopdrachtService.getOpenData().subscribe({
      next:(result)=>{
        console.log("result of http call in service")
        console.log(result);
      }
    })
  }

  constructor(private service:EindopdrachtService) { }

  ngOnInit() {
    
  }

}
