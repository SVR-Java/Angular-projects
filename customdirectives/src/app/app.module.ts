import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {setBackgroundDirective} from './CustomeDirective/setbackground.directive';
import { HighlightDirective } from './CustomeDirective/highlight.directive';
import { HoverDirective } from './CustomeDirective/hover.directive';
import { BeterHighlighterDirective } from './CustomeDirective/beter-highlighter.directive';
@NgModule({
  declarations: [
    AppComponent,
    setBackgroundDirective,
    HighlightDirective,
    HoverDirective,
    BeterHighlighterDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
