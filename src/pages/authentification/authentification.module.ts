import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AuthentificationPage } from './authentification';

@NgModule({
  declarations: [
    AuthentificationPage,
  ],
  imports: [
    IonicPageModule.forChild(AuthentificationPage),
  ],
})
export class AuthentificationPageModule {}
