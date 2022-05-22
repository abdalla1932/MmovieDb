import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardGuard } from './auth-guard.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { MoviesComponent } from './movies/movies.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PeopleComponent } from './people/people.component';
import { PeopledetailsComponent } from './peopledetails/peopledetails.component';
import { RegisterComponent } from './register/register.component';
import { TopMoviesComponent } from './top-movies/top-movies.component';
import { TopTvComponent } from './top-tv/top-tv.component';
import { TvComponent } from './tv/tv.component';

const routes: Routes = 
[
  {path:"", redirectTo:"register", pathMatch:"full"},
  {path:"home",canActivate:[AuthGuardGuard], component:HomeComponent},
  {path:"movies" ,canActivate:[AuthGuardGuard], component:MoviesComponent},
  {path:"tv" ,canActivate:[AuthGuardGuard], component:TvComponent},
  {path:"people" ,canActivate:[AuthGuardGuard], component:PeopleComponent},
  {path:"topmovie" ,canActivate:[AuthGuardGuard], component:TopMoviesComponent},
  {path:"toptv" ,canActivate:[AuthGuardGuard], component:TopTvComponent},
  {path:"details/:id", component:MovieDetailsComponent},
  {path:"peopledet/:id", component:PeopledetailsComponent},
  {path:"register", component:RegisterComponent},
  {path:"login", component:LoginComponent},
  {path:"**", component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
