import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PresentationBrevePage } from './presentation-breve';

@NgModule({
  declarations: [
    PresentationBrevePage,
  ],
  imports: [
    IonicPageModule.forChild(PresentationBrevePage),
  ],
})
export class PresentationBrevePageModule {}
