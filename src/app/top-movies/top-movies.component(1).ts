import { Component, OnInit } from '@angular/core';
import {MovieServiceService} from '../movie-service.service'

@Component({
  selector: 'app-top-movies',
  templateUrl: './top-movies.component.html',
  styleUrls: ['./top-movies.component.scss']
})
export class TopMoviesComponent{

  movietop:any[]=[];
  imgPrefix:string= "https://image.tmdb.org/t/p/w500/";

  constructor(_movies:MovieServiceService) 
  { 
    _movies.topRated("movie").subscribe((data)=>
    {
       this.movietop = data.results;
       console.log(this.movietop);
       
    })
  }

  
}
