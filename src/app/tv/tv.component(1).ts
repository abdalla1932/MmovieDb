import { Component } from '@angular/core';
import {MovieServiceService} from "../movie-service.service"

@Component({
  selector: 'app-tv',
  templateUrl: './tv.component.html',
  styleUrls: ['./tv.component.scss']
})
export class TvComponent {

  term:string='';
  nowTv:any[]=[];
  imgPrefix:string= "https://image.tmdb.org/t/p/w500/";
  constructor(_tv:MovieServiceService)
   {
     _tv.popularTv().subscribe((data)=>
     {
       this.nowTv = data.results;
     })
   }


}
