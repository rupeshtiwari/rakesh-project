import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms'; // Import the ReactiveFormsModule
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input'; // Import the required Angular Material modules
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';

import { BidPackageDialogComponent } from './components/bid-package-dialog/bid-package-dialog.component';
import { AppComponent } from './components/root/app.component';
import { WorkOrderPageComponent } from './components/work-order-page/work-order-page.component';
import { DynamicFormControlComponent } from '../framework/dynamic-form-control/dynamic-form-control.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    BidPackageDialogComponent,
    WorkOrderPageComponent,
    DynamicFormControlComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule, // Add the ReactiveFormsModule here
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule, // Add the Angular Material modules here
    MatButtonModule,
    MatDialogModule,
    MatRadioModule,
    MatCardModule,
    MatSelectModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
