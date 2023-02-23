import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { GifModule } from './gif-module/gif-module.module';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    GifModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
