import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContentComponent } from './MyComponents/content/content.component';
import { ContentItemComponent } from './Mycomponents/content-item/content-item.component';

@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    ContentItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
