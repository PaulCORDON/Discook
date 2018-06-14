import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PresentationBrevePage } from './presentation-breve';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  declarations: [
    PresentationBrevePage,
  ],
  imports: [
    IonicPageModule.forChild(PresentationBrevePage),
    PipesModule
  ],
})
export class PresentationBrevePageModule {}
