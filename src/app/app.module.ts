import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from "@angular/material/form-field";

import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { BmiComponent } from "./bmi/bmi.component";
import { BmiService } from "./bmi.service";

// TODO: Need to go throw https://angular.io/guide/http

@NgModule({
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule
  ],
  declarations: [AppComponent, BmiComponent],
  bootstrap: [AppComponent],
  providers: [BmiService]
})
export class AppModule {}
