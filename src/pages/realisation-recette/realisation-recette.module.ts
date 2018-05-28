import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RealisationRecettePage } from './realisation-recette';

@NgModule({
  declarations: [
    RealisationRecettePage,
  ],
  imports: [
    IonicPageModule.forChild(RealisationRecettePage),
  ],
})
export class RealisationRecettePageModule {}
