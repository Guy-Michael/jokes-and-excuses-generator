import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FetchDisplayJokeComponent } from './fetch-display-joke/fetch-display-joke.component';
import { HttpClientModule } from '@angular/common/http';
import { BottomNavigationCellComponent } from './bottom-navigation-cell/bottom-navigation-cell.component';
import { BottomNavigationBarComponent } from './bottom-navigation-bar/bottom-navigation-bar.component';
import { DisplayGagComponent } from './display-gag/display-gag.component';

@NgModule({
  declarations: [
    AppComponent,
    FetchDisplayJokeComponent,
    BottomNavigationCellComponent,
    BottomNavigationBarComponent,
    DisplayGagComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
