import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {setBackgroundDirective} from './CustomeDirective/setbackground.directive';
import { HighlightDirective } from './CustomeDirective/highlight.directive';
@NgModule({
  declarations: [
    AppComponent,
    setBackgroundDirective,
    HighlightDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
