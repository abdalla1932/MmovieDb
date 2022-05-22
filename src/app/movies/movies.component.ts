import { Component, OnInit } from '@angular/core';
import {MovieServiceService} from "../movie-service.service"

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  nowMovies:any=[];
  nowMovies2:any=[];
  imgPrefix:string= "https://image.tmdb.org/t/p/w500/";
  term:string = "";

  constructor(public _movies:MovieServiceService)
   { 
      _movies.nowPlaying("movie",2).subscribe((data)=>{
        this.nowMovies = data.results;
      })
      
      _movies.nowPlaying("movie",3).subscribe((data)=>{
        this.nowMovies2 = data.results;
      })
   }

  ngOnInit(): void {
   
  }

}
