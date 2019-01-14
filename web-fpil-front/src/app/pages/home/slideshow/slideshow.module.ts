import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlideshowComponent } from './slideshow.component';
import { SwipeService } from './swipe.service';
import { BrowserTransferStateModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
@NgModule({
  imports: [
    CommonModule,
    BrowserTransferStateModule,
    RouterModule
  ],
  declarations: [
    SlideshowComponent
  ],
  exports: [
    SlideshowComponent
  ],
  providers: [
    SwipeService
  ]
})
export class SlideshowModule { }
