import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AjoutRecettePage } from './ajout-recette';

@NgModule({
  declarations: [
    AjoutRecettePage,
  ],
  imports: [
    IonicPageModule.forChild(AjoutRecettePage),
  ],
})
export class AjoutRecettePageModule {}
