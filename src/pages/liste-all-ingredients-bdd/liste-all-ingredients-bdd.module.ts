import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListeAllIngredientsBddPage } from './liste-all-ingredients-bdd';

@NgModule({
  declarations: [
    ListeAllIngredientsBddPage,
  ],
  imports: [
    IonicPageModule.forChild(ListeAllIngredientsBddPage),
  ],
})
export class ListeAllIngredientsBddPageModule {}
