import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
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
import { ModalContentPage } from '../pages/modal/modal';
import { PopoverPage } from '../pages/popover/popover';
import { PopoverContentPage } from '../pages/popover/popover';
import { RadioPage } from '../pages/radio/radio';
import { RangePage } from '../pages/range/range';
import { SearchbarPage } from '../pages/searchbar/searchbar';
import { SegmentPage } from '../pages/segment/segment';
import { SelectPage } from '../pages/select/select';
import { SlidesPage } from '../pages/slides/slides';
import { ToastPage } from '../pages/toast/toast';
import { TogglePage } from '../pages/toggle/toggle';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ActionSheetPage,
    AlertPage,
    BadgePage,
    ButtonPage,
    CardPage,
    CheckboxPage,
    DatetimePage,
    FabPage,
    GesturePage,
    GridPage,
    IconPage,
    InputPage,
    ListPage,
    LoadingPage,
    ModalPage,
    ModalContentPage,
    PopoverPage,
    PopoverContentPage,
    RadioPage,
    RangePage,
    SearchbarPage,
    SegmentPage,
    SelectPage,
    SlidesPage,
    ToastPage,
    TogglePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ActionSheetPage,
    AlertPage,
    BadgePage,
    ButtonPage,
    CardPage,
    CheckboxPage,
    DatetimePage,
    FabPage,
    GesturePage,
    GridPage,
    IconPage,
    InputPage,
    ListPage,
    LoadingPage,
    ModalPage,
    ModalContentPage,
    PopoverPage,
    PopoverContentPage,
    RadioPage,
    RangePage,
    SearchbarPage,
    SegmentPage,
    SelectPage,
    SlidesPage,
    ToastPage,
    TogglePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
