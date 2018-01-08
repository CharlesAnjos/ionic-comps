import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ActionSheetPage } from '../pages/actionsheet/actionsheet';
import { AlertPage } from '../pages/alert/alert';
import { BadgePage } from '../pages/badge/badge';
import { ButtonPage } from '../pages/button/button';
import { CardPage } from '../pages/card/card';
import { CheckboxPage } from '../pages/checkbox/checkbox';
import { DatetimePage } from '../pages/datetime/datetime';
import { FabPage } from '../pages/fab/fab';
import { GesturePage } from '../pages/gesture/gesture';
import { GridPage } from '../pages/grid/grid';
import { IconPage } from '../pages/icon/icon';
import { InputPage } from '../pages/input/input';
import { ListPage } from '../pages/list/list';
import { LoadingPage } from '../pages/loading/loading';
import { ModalPage } from '../pages/modal/modal';
import { PopoverPage } from '../pages/popover/popover';
import { RadioPage } from '../pages/radio/radio';
import { RangePage } from '../pages/range/range';
import { SearchbarPage } from '../pages/searchbar/searchbar';
import { SegmentPage } from '../pages/segment/segment';
import { SelectPage } from '../pages/select/select';
import { SlidesPage } from '../pages/slides/slides';
import { ToastPage } from '../pages/toast/toast';
import { TogglePage } from '../pages/toggle/toggle';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage:any = HomePage;

  pages: Array<{title: String, component: any}>;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });

    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'Action Sheets', component: ActionSheetPage },
      { title: 'Alerts', component: AlertPage },
      { title: 'Badges', component: BadgePage },
      { title: 'Buttons', component: ButtonPage },
      { title: 'Cards', component: CardPage },
      { title: 'Checkboxes', component: CheckboxPage },
      { title: 'DateTime', component: DatetimePage },
      { title: 'FABs', component: FabPage },
      { title: 'Gestures', component: GesturePage },
      { title: 'Grid', component: GridPage },
      { title: 'Icons', component: IconPage },
      { title: 'Inputs', component: InputPage },
      { title: 'Lists', component: ListPage },
      { title: 'Loading', component: LoadingPage },
      { title: 'Modals', component: ModalPage },
      { title: 'Popover', component: PopoverPage },
      { title: 'Radio', component: RadioPage },
      { title: 'Range', component: RangePage },
      { title: 'Searchbar', component: SearchbarPage },
      { title: 'Segment', component: SegmentPage },
      { title: 'Select', component: SelectPage },
      { title: 'Slides', component: SlidesPage },
      { title: 'Toast', component: ToastPage },
      { title: 'Toggle', component: TogglePage }
    ]
  }
  
  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}

