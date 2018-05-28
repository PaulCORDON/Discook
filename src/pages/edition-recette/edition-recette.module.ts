import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditionRecettePage } from './edition-recette';

@NgModule({
  declarations: [
    EditionRecettePage,
  ],
  imports: [
    IonicPageModule.forChild(EditionRecettePage),
  ],
})
export class EditionRecettePageModule {}
