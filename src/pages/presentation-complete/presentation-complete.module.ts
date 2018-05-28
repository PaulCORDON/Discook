import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PresentationCompletePage } from './presentation-complete';

@NgModule({
  declarations: [
    PresentationCompletePage,
  ],
  imports: [
    IonicPageModule.forChild(PresentationCompletePage),
  ],
})
export class PresentationCompletePageModule {}
