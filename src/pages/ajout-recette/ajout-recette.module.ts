import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AjoutRecettePage } from './ajout-recette';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  declarations: [
    AjoutRecettePage,
  ],
  imports: [
    IonicPageModule.forChild(AjoutRecettePage),
    PipesModule
  ],
})
export class AjoutRecettePageModule {}
