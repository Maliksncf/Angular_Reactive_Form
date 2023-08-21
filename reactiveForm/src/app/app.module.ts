import { SearchMovieComponent } from './search-movie/search-movie.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MyFormComponent } from './my-form/my-form.component';
import { ROUTES } from './app.routes';


@NgModule({
  declarations: [
    AppComponent,
    MyFormComponent,
    SearchMovieComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule, // <-- import the module!
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
