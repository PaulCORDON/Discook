import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListeIngredientPage } from './liste-ingredient';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  declarations: [
    ListeIngredientPage,
  ],
  imports: [
    IonicPageModule.forChild(ListeIngredientPage),
    PipesModule
    ],
})
export class ListeIngredientPageModule {}
