import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BidPackageDialogComponent } from './components/bid-package-dialog/bid-package-dialog.component';
import { WorkOrderPageComponent } from './components/work-order-page/work-order-page.component';

@NgModule({
  declarations: [
    AppComponent,
    BidPackageDialogComponent,
    WorkOrderPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
