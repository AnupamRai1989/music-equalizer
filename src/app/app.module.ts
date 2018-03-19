import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BandsComponent } from './bands/bands.component';
import { PresetsComponent } from './presets/presets.component';
import { PresetService } from './presets/preset.service';
import { BandComponent } from './bands/band/band.component';
import { BandDirective } from './bands/band/band.directive';
import { BandBarDirective } from './bands/band/band-bar.directive';
import { FormatNumberPipe } from './pipes/format-number.pipe';

@NgModule({
  declarations: [
    AppComponent,
    BandsComponent,
    PresetsComponent,
    BandComponent,
    BandBarDirective,
    BandDirective,
    FormatNumberPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [PresetService],
  bootstrap: [AppComponent]
})
export class AppModule { }