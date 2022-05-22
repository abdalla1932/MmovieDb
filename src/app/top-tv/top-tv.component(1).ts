import { Component, OnInit } from '@angular/core';
import {MovieServiceService} from '../movie-service.service'

@Component({
  selector: 'app-top-tv',
  templateUrl: './top-tv.component.html',
  styleUrls: ['./top-tv.component.scss']
})
export class TopTvComponent implements OnInit {

  tvtop:any[]=[];
  imgPrefix:string= "https://image.tmdb.org/t/p/w500/";
  constructor(_tv:MovieServiceService) 
  {
    _tv.topRated("tv").subscribe((data)=>
    {
       this.tvtop = data.results;
       console.log(this.tvtop);
       
    })
  }

  ngOnInit(): void {
  }

}
