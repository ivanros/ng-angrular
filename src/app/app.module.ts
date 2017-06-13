import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MinionsListComponent } from './minions-list/minions-list.component';
import { MinionsDetailComponent } from './minions-detail/minions-detail.component';
import { ContactComponent } from './contact/contact.component';

import { SearchFiltersPipe } from './commons/pipes/search-filters.pipe';

import { MinionsListService } from './minions-list/services/minions-list.service';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  }, {
    path: 'employees',
    component: MinionsListComponent
  }, {
    path: 'employees/:employeeId',
    component: MinionsDetailComponent
  }, {
    path: 'contact',
    component: ContactComponent
  }, {
    path: '**',
    component: HomeComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MinionsListComponent,
    SearchFiltersPipe,
    ContactComponent,
    MinionsDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    MinionsListService
  ],
  bootstrap: [
    AppComponent
  ]
})

export class AppModule { }
