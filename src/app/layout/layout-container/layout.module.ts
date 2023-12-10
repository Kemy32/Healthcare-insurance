import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { HomeComponent } from 'src/app/pages/home/home.component';
import { FooterComponent } from '../footer/footer.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { CarouselModule } from 'primeng/carousel';
import { ToastModule } from 'primeng/toast';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { DialogModule } from 'primeng/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { NgOtpInputModule } from 'ng-otp-input';
import { DropdownModule } from 'primeng/dropdown';
import { IndexOfPipe } from 'src/app/services/pipes/index-of-pipe';
import { PasswordModule } from 'primeng/password';
import { GMapModule } from 'primeng/gmap';
import { DividerModule } from 'primeng/divider';
import { TabViewModule } from 'primeng/tabview';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { ConfirmationService } from 'primeng/api';
import { AvatarModule } from 'primeng/avatar';
import { CalendarModule } from 'primeng/calendar';
import { AboutUsComponent } from '../../pages/about-us/about-us.component';
import { ContactUsComponent } from '../../pages/contact-us/contact-us.component';
import { SignUpComponent } from '../../pages/sign-up/sign-up.component';
import { PanelModule } from 'primeng/panel'
import { ForgetPassComponent } from 'src/app/pages/forget-pass/forget-pass.component';
import { LoginComponent } from 'src/app/pages/login/login.component';
import { InsuranceHomeComponent } from 'src/app/pages/insurance-home/insurance-home.component';
import { PatientSignUpComponent } from 'src/app/pages/patient-sign-up/patient-sign-up.component';
import { NurseSignUpComponent } from 'src/app/pages/nurse-sign-up/nurse-sign-up.component';
import { DoctorSignUpComponent } from 'src/app/pages/doctor-sign-up/doctor-sign-up.component';
import { RadioButtonModule } from 'primeng/radiobutton'
import { SearchResultsComponent } from 'src/app/pages/search-results/search-results.component';
import { DoctorProfileComponent } from 'src/app/pages/doctor-profile/doctor-profile.component';
import { PatientProfileComponent } from 'src/app/pages/patient-profile/patient-profile.component';
import { NurseProfileComponent } from 'src/app/pages/nurse-profile/nurse-profile.component';
import { InsuranceSelectorComponent } from 'src/app/pages/insurance-selector/insurance-selector.component';
import { PatientEditProfileComponent } from 'src/app/pages/patient-edit-profile/patient-edit-profile.component';
import { DoctorEditProfileComponent } from 'src/app/pages/doctor-edit-profile/doctor-edit-profile.component';
import { NurseEditProfileComponent } from 'src/app/pages/nurse-edit-profile/nurse-edit-profile.component';
import { AdminViewAllAppsComponent } from 'src/app/pages/admin-view-all-apps/admin-view-all-apps.component';
import { AdminViewAllDocsComponent } from 'src/app/pages/admin-view-all-docs/admin-view-all-docs.component';
import { AdminViewAllNursesComponent } from 'src/app/pages/admin-view-all-nurses/admin-view-all-nurses.component';
import { AdminViewAllPatComponent } from 'src/app/pages/admin-view-all-pat/admin-view-all-pat.component';
import { AdminRegRequestsComponent } from 'src/app/pages/admin-reg-requests/admin-reg-requests.component';
import { NavAdminComponent } from 'src/app/layout/nav-admin/nav-admin.component';
import { NavLoggedInComponent } from 'src/app/layout/nav-logged-in/nav-logged-in.component';
import { ViewQuoteComponent } from 'src/app/pages/view-quote/view-quote.component';




@NgModule({
  providers: [ConfirmationService],
  declarations: [
    LayoutComponent,
    HomeComponent,
    FooterComponent,
    NavbarComponent,
    NavAdminComponent,
    NavLoggedInComponent,
    IndexOfPipe,
    AboutUsComponent,
    InsuranceSelectorComponent,
    ContactUsComponent,
    SignUpComponent,
    ForgetPassComponent,
    LoginComponent,
    PatientSignUpComponent,
    NurseSignUpComponent,
    DoctorSignUpComponent,
    SearchResultsComponent,
    DoctorProfileComponent,
    PatientProfileComponent,
    NurseProfileComponent,
    PatientEditProfileComponent,
    DoctorEditProfileComponent,
    NurseEditProfileComponent,
    InsuranceHomeComponent,
    AdminViewAllAppsComponent,
    AdminViewAllDocsComponent,
    AdminViewAllNursesComponent,
    AdminViewAllPatComponent,
    AdminRegRequestsComponent,
    ViewQuoteComponent,
  ],
  imports: [
    FormsModule,
    PanelModule,
    CommonModule,
    ButtonModule,
    SharedModule,
    DialogModule,
    ButtonModule,
    AvatarModule,
    DividerModule,
    TabViewModule,
    CarouselModule,
    PasswordModule,
    CalendarModule,
    RadioButtonModule,
    CarouselModule,
    DropdownModule,
    NgOtpInputModule,
    ConfirmPopupModule,
    ReactiveFormsModule,
    LayoutRoutingModule,
    ProgressSpinnerModule,
  ]
})
export class LayoutModule { }
