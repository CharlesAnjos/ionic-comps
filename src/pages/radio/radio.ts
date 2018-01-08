import { Component } from '@angular/core';
import {
  FormGroup,
  FormControl
} from '@angular/forms';
/**
 * Generated class for the RadioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-radio',
  templateUrl: 'radio.html',
})
export class RadioPage {
  langs;
  langForm;

  constructor() {
    this.langForm = new FormGroup({
      "langs": new FormControl({value: 'rust', disabled: false})
    });
  }

  doSubmit(event) {
    console.log('Submitting form', this.langForm.value);
    event.preventDefault();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RadioPage');
  }

}
