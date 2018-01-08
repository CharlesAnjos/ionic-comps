import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';

/**
 * Generated class for the IconPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-icon',
  templateUrl: 'icon.html',
})
export class IconPage {

  myIcon: string = "home";
  constructor() {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IconPage');
  }

}
