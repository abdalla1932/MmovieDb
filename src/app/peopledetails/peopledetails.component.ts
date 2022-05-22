import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieServiceService } from '../movie-service.service';

@Component({
  selector: 'app-peopledetails',
  templateUrl: './peopledetails.component.html',
  styleUrls: ['./peopledetails.component.scss']
})
export class PeopledetailsComponent {
  imgPrefix:string= "https://image.tmdb.org/t/p/w500/";
peopleId:any;
peopleDetails:any;

constructor(private _ActivatedRoute:ActivatedRoute, private _MovieServiceService:MovieServiceService) {
  this.peopleId = _ActivatedRoute.snapshot.params.id;
  _MovieServiceService.peopleDetails(this.peopleId).subscribe((data)=>
  {
    this.peopleDetails = data;
  })
 }

 

}
