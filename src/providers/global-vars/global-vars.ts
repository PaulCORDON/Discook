import { Injectable } from '@angular/core';

@Injectable()
export class GlobalVarsProvider {

  private pageScroll:boolean;
  private lectureAudio:boolean;

  constructor() {
    console.log('Hello GlobalVarsProvider Provider');
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
}
