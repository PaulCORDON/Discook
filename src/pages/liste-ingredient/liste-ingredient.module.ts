import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListeIngredientPage } from './liste-ingredient';

@NgModule({
  declarations: [
    ListeIngredientPage,
  ],
  imports: [
    IonicPageModule.forChild(ListeIngredientPage),
  ],
})
export class ListeIngredientPageModule {}
