import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MoviesComponent } from './movies/movies.component';
import { TvComponent } from './tv/tv.component';
import { PeopleComponent } from './people/people.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HttpClientModule } from '@angular/common/http';
import { TopMoviesComponent } from './top-movies/top-movies.component';
import { TopTvComponent } from './top-tv/top-tv.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { PeopledetailsComponent } from './peopledetails/peopledetails.component';
import { SearchPipe } from './search.pipe';
import { SwiperModule } from 'swiper/angular';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MoviesComponent,
    TvComponent,
    PeopleComponent,
    NavbarComponent,
    NotFoundComponent,
    TopMoviesComponent,
    TopTvComponent,
    RegisterComponent,
    LoginComponent,
    MovieDetailsComponent,
    PeopledetailsComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule,ReactiveFormsModule,FormsModule,
    SwiperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
