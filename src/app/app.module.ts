import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SearchFiltersPipe } from './commons/pipes/search-filters.pipe';

import { MinionsListService } from './minions-list/services/minions-list.service';

@NgModule({
  declarations: [
    AppComponent,
    SearchFiltersPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    MinionsListService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
