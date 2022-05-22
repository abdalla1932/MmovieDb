import { Component, OnInit } from '@angular/core';
import {MovieServiceService} from "../movie-service.service"
import { SwiperComponent } from "swiper/angular";
import SwiperCore, { Pagination, Navigation } from "swiper";

SwiperCore.use([Pagination, Navigation]);
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent  {
 
  
  TrendMovies:any[]=[];
  TrendTv:any[]=[];
  imgPrefix:string= "https://image.tmdb.org/t/p/w500/";
  constructor(private _Movies:MovieServiceService)
   { 
     _Movies.getTrending('movie').subscribe((data)=>{
       this.TrendMovies = data.results.splice(10)
     })

     _Movies.getTrending('tv').subscribe((data)=>{
      this.TrendTv = data.results.splice(10)
    })
   }

  

}
