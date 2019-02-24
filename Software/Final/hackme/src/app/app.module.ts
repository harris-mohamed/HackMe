import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { AboutComponent } from './about/about.component';
import { LogInComponent } from './log-in/log-in.component';
import { FaqComponent } from './faq/faq.component';
import { AddDeviceComponent } from './add-device/add-device.component';
import { MeHackedComponent } from './me-hacked/me-hacked.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    AboutComponent,
    LogInComponent,
    FaqComponent,
    AddDeviceComponent,
    MeHackedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
