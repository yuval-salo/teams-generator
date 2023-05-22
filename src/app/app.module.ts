import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {TeamComponent} from './team/team.component'
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,TeamComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
