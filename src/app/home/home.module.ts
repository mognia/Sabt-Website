import { ModuleWithProviders, NgModule } from '@angular/core';

import { HomeComponent } from './home.component';

import { HomeRoutingModule } from './home-routing.module';
import { ThemeModule } from '../@theme/theme.module';
import { HeaderComponent } from "./components/header/header.component";

import {
  NbActionsModule,
  NbCardModule,
  NbLayoutModule,
  NbMenuModule,
  NbRouteTabsetModule,
  NbSearchModule,
  NbSidebarModule,
  NbTabsetModule,
  NbUserModule,
  NbCheckboxModule,
  NbPopoverModule,
  NbContextMenuModule,
  NbProgressBarModule,
  NbCalendarModule,
  NbCalendarRangeModule,
  NbStepperModule,
  NbButtonModule,
  NbInputModule,
  NbAccordionModule,
  NbDatepickerModule,
  NbDialogModule,
  NbWindowModule,
  NbListModule,
  NbToastrModule,
  NbAlertModule,
  NbSpinnerModule,
  NbRadioModule,
  NbSelectModule,
  NbChatModule,
  NbTooltipModule,
  NbCalendarKitModule,
} from '@nebular/theme';
import { UploaderComponent } from './components/uploader/uploader.component';
import { NewRecordComponent } from './components/new-record/new-record.component';
import { OptionalInfoComponent } from './components/optional-info/optional-info.component';
import { FeaturesComponent } from './sections/features/features.component';
import { DocsSectionComponent } from './sections/docs-section/docs-section.component';
import { NewsFeedSectionComponent } from './sections/news-feed-section/news-feed-section.component';
import { DownloadSectionComponent } from './sections/download-section/download-section.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import {MatDialogModule} from '@angular/material/dialog';
import { NgxIntlTelInputModule } from 'ngx-intl-tel-input';
import { BsDropdownModule } from 'ngx-bootstrap';
import { ReviewInfoComponent } from './components/review-info/review-info.component';
import { CopyRightComponent } from './components/copy-right/copy-right.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { LoginPhoneinputComponent } from './components/login-phoneinput/login-phoneinput.component';
import { LoginCodeinputComponent } from './components/login-codeinput/login-codeinput.component';
import { LoginMailinputComponent } from './components/login-mailinput/login-mailinput.component';
import { NewClaimComponent } from './components/new-claim/new-claim.component';

const NB_MODULES = [
  NbCardModule,
  NbLayoutModule,
  NbTabsetModule,
  NbRouteTabsetModule,
  NbMenuModule,
  NbUserModule,
  NbActionsModule,
  NbSearchModule,
  NbSidebarModule,
  NbCheckboxModule,
  NbPopoverModule,
  NbContextMenuModule,
  NbProgressBarModule,
  NbCalendarModule,
  NbCalendarRangeModule,
  NbStepperModule,
  NbButtonModule,
  NbListModule,
  NbToastrModule,
  NbInputModule,
  NbAccordionModule,
  NbDatepickerModule,
  NbDialogModule,
  NbWindowModule,
  NbAlertModule,
  NbSpinnerModule,
  NbRadioModule,
  NbSelectModule,
  NbChatModule,
  NbTooltipModule,
  NbCalendarKitModule,
];

const HOME_COMPONENTS = [
    HomeComponent,
    HeaderComponent,
    UploaderComponent,
    NewRecordComponent,
    OptionalInfoComponent,
    FeaturesComponent,
    DocsSectionComponent,
    NewsFeedSectionComponent,
    DownloadSectionComponent,
    FooterComponent,
    LoginComponent,
];


@NgModule({
  imports: [
    BsDropdownModule.forRoot(),
    NgxIntlTelInputModule,
    HomeRoutingModule,
    MatDialogModule,
    ThemeModule,
    NbTabsetModule,
     ...NB_MODULES
  ],
  declarations: [
    ...HOME_COMPONENTS,
    ReviewInfoComponent,
    CopyRightComponent,
    NavBarComponent,
    LoginPhoneinputComponent,
    LoginCodeinputComponent,
    LoginMailinputComponent,
    NewClaimComponent,
  ],
  entryComponents:[
    LoginComponent,
    HeaderComponent
  ]
})
export class HomeModule {

}
