import { Component} from '@angular/core';
import {MovieServiceService} from "../movie-service.service"

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent {

  people:any[]=[];
  imgPrefix:string= "https://image.tmdb.org/t/p/w500/";
  
  constructor(_people:MovieServiceService)
   {

    _people.people().subscribe((data=>
      {
         this.people= data.results;
      }))
  }

  
}
