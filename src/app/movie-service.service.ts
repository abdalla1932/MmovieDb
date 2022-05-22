import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MovieServiceService {

  

  constructor(public _HttpClient:HttpClient) { }

  getTrending(mediaType:string):Observable<any>
  {
    return this._HttpClient.get(`https://api.themoviedb.org/3/trending/${mediaType}/day?api_key=c24da17e5b0b31bfdd3265e990354e9b`)
  }

  topRated(mediaType:string):Observable<any>
  {
    return this._HttpClient.get(`https://api.themoviedb.org/3/${mediaType}/top_rated?api_key=c24da17e5b0b31bfdd3265e990354e9b&language=en-US&page=2`)
  }

  nowPlaying(mediaType:string,index: number):Observable<any>
  {
    return this._HttpClient.get(`https://api.themoviedb.org/3/${mediaType}/now_playing?api_key=c24da17e5b0b31bfdd3265e990354e9b&language=en-US&page=${index}`)
  }

  popularTv():Observable<any>
  {
    return this._HttpClient.get(`https://api.themoviedb.org/3/tv/popular?api_key=c24da17e5b0b31bfdd3265e990354e9b&language=en-US&page=3`)
  }

  people():Observable<any>
  {
    return this._HttpClient.get(`https://api.themoviedb.org/3/person/popular?api_key=c24da17e5b0b31bfdd3265e990354e9b&language=en-US&page=1`)
  }

  peopleDetails(id:any):Observable<any>
  {
    return this._HttpClient.get(`https://api.themoviedb.org/3/person/${id}?api_key=c24da17e5b0b31bfdd3265e990354e9b&language=en-US`)
  }

  movieDetails(mediaType:string , id:any):Observable<any>
  {
    return this._HttpClient.get(`https://api.themoviedb.org/3/${mediaType}/${id}?api_key=c24da17e5b0b31bfdd3265e990354e9b&language=en-US`)
  }

  getVideos(mediaType:string , id:any):Observable<any>
  {
    return this._HttpClient.get(`https://api.themoviedb.org/3/${mediaType}/${id}/videos?api_key=c24da17e5b0b31bfdd3265e990354e9b&language=en-US`)
  }
}




