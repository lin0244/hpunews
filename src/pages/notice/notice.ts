import { Component, ChangeDetectorRef, ViewChild } from '@angular/core';

import { NavController, MenuController, Content } from 'ionic-angular';

@Component({
  selector: 'page-notice',
  templateUrl: 'notice.html'
})
export class NoticePage {
  @ViewChild(Content) content: Content;
  showToolbar:boolean = false;

  constructor(public navCtrl: NavController,
              menu: MenuController,
              public ref: ChangeDetectorRef,) {
  }

  onScroll($event: any){
      let scrollTop = $event.scrollTop;
      this.showToolbar = scrollTop >= 120;
      this.ref.detectChanges();
  }


}
