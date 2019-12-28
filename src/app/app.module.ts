import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BlogDetailComponent } from './components/blog-detail/blog-detail.component';
import { BlogListComponent } from './components/blog-list/blog-list.component';
import { BlogComponent } from './components/blog/blog.component';
import { MatIconModule, MatIcon } from '@angular/material/icon';

import { environment } from '../environments/environment'
import { AngularFireModule } from 'angularfire2'
import { AngularFirestoreModule } from 'angularfire2/firestore'
import { BlogService } from './services/blog.service';
import { NewBlogComponent } from './components/new-blog/new-blog.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { MatProgressBarModule } from '@angular/material/progress-bar'
import { AngularFireStorageModule } from 'angularfire2/storage';
import { MatChipsModule } from '@angular/material/chips';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { EscapeHtmlPipe } from './pipes/keep-html.pipe';
import { AdminComponent } from './components/admin/admin.component';
import { LoginComponent } from './components/login/login.component';
import { AngularFireAuthModule } from "@angular/fire/auth";
import { ProfileComponent } from '../app/components/profile/profile.component';
import { SignupComponent } from './components/signup/signup.component';
import { DropzoneDirective } from './dropzone.directive';
import { UploaderComponent } from './uploader/uploader.component';
import { UploadTaskComponent } from './upload-task/upload-task.component';
import { ViewGalleryComponent } from './view-gallery/view-gallery.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { HomeLandingComponent } from './components/home-landing/home-landing.component';
import { HomeComponent } from './components/home/home.component';
import { EventsComponent } from './components/events/events.component';
import { DomainsComponent } from './components/domains/domains.component';
import { TeamComponent } from './components/team/team.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { MainNavbarComponent } from './components/main-navbar/main-navbar.component';
import { AdminPanelComponent } from './components/admin-panel/admin-panel.component';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { AdminEventsComponent } from './components/admin-events/admin-events.component';


import { MatButtonModule, MatInputModule, MatSliderModule, MatDialogModule } from '@angular/material';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material';
import { AdminViewComponent } from './components/admin-view/admin-view.component';
import { AdminVdetailsComponent } from './components/admin-vdetails/admin-vdetails.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';
import { TableComponent } from './components/table/table.component';

import { RecaptchaModule, RecaptchaFormsModule } from 'ng-recaptcha';
import { AdminFeedbackComponent } from './components/admin-feedback/admin-feedback.component';
import { FooterComponent } from './components/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BlogDetailComponent,
    BlogListComponent,
    BlogComponent,
    NewBlogComponent,
    EscapeHtmlPipe,
    AdminComponent,
    LoginComponent,
    ProfileComponent,
    SignupComponent,
    DropzoneDirective,
    UploaderComponent,
    UploadTaskComponent,
    ViewGalleryComponent,
    ForgotPasswordComponent,
    HomeLandingComponent,
    HomeComponent,
    EventsComponent,
    DomainsComponent,
    TeamComponent,
    AboutusComponent,
    MainNavbarComponent,
    AdminPanelComponent,
    AdminLoginComponent,
    AdminEventsComponent,
    AdminViewComponent,
    AdminVdetailsComponent,
    VerifyEmailComponent,
    TableComponent,
    AdminFeedbackComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    AngularFireModule.initializeApp(environment.firebase, 'angularfs'),
    AngularFirestoreModule,
    AngularFireStorageModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    FormsModule,
    MatProgressBarModule,
    MatIconModule,
    MatChipsModule,
    MatProgressSpinnerModule,
    CKEditorModule,
    AngularFireAuthModule,
    ReactiveFormsModule, FormsModule, BrowserAnimationsModule,
    MatButtonModule, MatInputModule, MatSliderModule, MatDialogModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    RecaptchaModule,
    RecaptchaFormsModule
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
