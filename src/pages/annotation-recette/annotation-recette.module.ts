import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AnnotationRecettePage } from './annotation-recette';

@NgModule({
  declarations: [
    AnnotationRecettePage,
  ],
  imports: [
    IonicPageModule.forChild(AnnotationRecettePage),
  ],
})
export class AnnotationRecettePageModule {}
