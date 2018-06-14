import { Injectable } from '@angular/core';
import { Ingredient } from '../../metier/ingredient';
import { utilisateur } from '../../metier/utilisateur';

@Injectable()
export class GlobalVarsProvider {

  private pageScroll:boolean;
  private lectureAudio:boolean;
  private listeIngredientsSelectionner: Array<Ingredient>=[];
  private listeIngredientsComplete: Array<Ingredient>=[];
  private compte;

  constructor() {
    console.log('Hello GlobalVarsProvider Provider');
  }
  public getListeIngredientsSelectionner():Array<Ingredient>{
    return this.listeIngredientsSelectionner;
  }

  public setListeIngredientsSelectionner(liste:Array<Ingredient>){
    this.listeIngredientsSelectionner = liste;
  }

  public getListeIngredientsComplete():Array<Ingredient>{
    return this.listeIngredientsComplete;
  }

  public setListeIngredientsComplete(liste:Array<Ingredient>){
    this.listeIngredientsComplete = liste;
  }

  public getPageScroll():boolean{
    return this.pageScroll;
  }

  public setPageScroll(mode:boolean){
    this.pageScroll = mode;
  }

  public getLectureAudio():boolean{
    return this.lectureAudio;
  }

  public setLectureAudio(mode:boolean){
    this.lectureAudio = mode;
  }

  public getCompte() : utilisateur{
    return this.compte;
  }

  public setCompte(compte : utilisateur){
    this.compte = compte;
  }
}
