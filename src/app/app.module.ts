import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { LayoutModule } from '@angular/cdk/layout';
import { AppMaterialModule } from './app.material.module';

import { Routing } from './app.routing';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactformComponent } from './contactform/contactform.component';
import { ContactlistComponent } from './contactlist/contactlist.component';
import { ContactService } from './services/contact.service';
import { NSTformComponent } from './nstform/nstform.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactformComponent,
    ContactlistComponent,
    NSTformComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    LayoutModule,
    Routing,
    AppRoutingModule
  ],
  providers: [ContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }