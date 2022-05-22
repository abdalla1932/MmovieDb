import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieServiceService } from '../movie-service.service';


@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent {

  imgPrefix:string= "https://image.tmdb.org/t/p/w500/";
  mediaId:any;
  movieDetails:any;
  
  constructor(private _ActivatedRoute:ActivatedRoute , private _MovieServiceService:MovieServiceService ) {
    this.mediaId = _ActivatedRoute.snapshot.params.id;
    _MovieServiceService.movieDetails('movie',this.mediaId).subscribe((data)=>{
      this.movieDetails = data;
    }) 

    _MovieServiceService.movieDetails('tv',this.mediaId).subscribe((data)=>{
      this.movieDetails = data;
    })

   

   }

   
     
   

  

}
