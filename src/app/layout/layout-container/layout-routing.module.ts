import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { HomeComponent } from 'src/app/pages/home/home.component';
import { InsuranceHomeComponent } from 'src/app/pages/insurance-home/insurance-home.component';
import { AboutUsComponent } from 'src/app/pages/about-us/about-us.component';
import { ContactUsComponent } from 'src/app/pages/contact-us/contact-us.component';
import { SignUpComponent } from 'src/app/pages/sign-up/sign-up.component';
import { LoginComponent } from 'src/app/pages/login/login.component';
import { ForgetPassComponent } from 'src/app/pages/forget-pass/forget-pass.component';
import { PatientSignUpComponent } from 'src/app/pages/patient-sign-up/patient-sign-up.component';
import { NurseSignUpComponent } from 'src/app/pages/nurse-sign-up/nurse-sign-up.component';
import { DoctorSignUpComponent } from 'src/app/pages/doctor-sign-up/doctor-sign-up.component';
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
import { ViewQuoteComponent } from 'src/app/pages/view-quote/view-quote.component';




const routes: Routes = [
  {
    path: '', component: LayoutComponent, children: [
      { path: 'home', component: HomeComponent },
      { path: 'insurance-home', component: InsuranceHomeComponent },
      { path: 'about-us', component: AboutUsComponent },
      { path: 'contact-us', component: ContactUsComponent },
      { path: 'sign-up', component: SignUpComponent },
      { path: 'login', component: LoginComponent },
      { path: 'forget-password', component: ForgetPassComponent },
      { path: 'patient-signup', component: PatientSignUpComponent },
      { path: 'insurance-selector', component: InsuranceSelectorComponent },
      { path: 'nurse-signup', component: NurseSignUpComponent },
      { path: 'doctor-signup', component: DoctorSignUpComponent },
      { path: 'search-results', component: SearchResultsComponent },
      { path: 'doctor-profile', component: DoctorProfileComponent },
      { path: 'patient-profile', component: PatientProfileComponent },
      { path: 'nurse-profile', component: NurseProfileComponent },
      { path: 'patient-edit-profile', component: PatientEditProfileComponent },
      { path: 'doctor-edit-profile', component: DoctorEditProfileComponent },
      { path: 'nurse-edit-profile', component: NurseEditProfileComponent },
      { path: 'admin-view-all-apps', component: AdminViewAllAppsComponent },
      { path: 'admin-view-all-docs', component: AdminViewAllDocsComponent },
      { path: 'admin-view-all-nurses', component: AdminViewAllNursesComponent },
      { path: 'admin-view-all-pat', component: AdminViewAllPatComponent },
      { path: 'admin-reg-requests', component: AdminRegRequestsComponent },
      { path: 'view-quote', component: ViewQuoteComponent },
      { path: '', redirectTo: 'home', pathMatch: 'full' }
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
