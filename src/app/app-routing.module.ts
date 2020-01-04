import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogDetailComponent } from './components/blog-detail/blog-detail.component';
import { BlogListComponent } from './components/blog-list/blog-list.component';
import { NewBlogComponent } from './components/new-blog/new-blog.component';
import {MatIconModule} from '@angular/material/icon';
import { AdminComponent } from './components/admin/admin.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './guard/auth.guard';
import { SecureInnerPagesGuard } from './guard/secure-inner-pages.guard';
import { ProfileComponent } from '../app/components/profile/profile.component';
import { SignupComponent } from './components/signup/signup.component';
import { UploaderComponent } from './uploader/uploader.component';
import { ViewGalleryComponent } from './view-gallery/view-gallery.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { HomeComponent } from './components/home/home.component';
import { EventsComponent } from './components/events/events.component';
import { DomainsComponent } from './components/domains/domains.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { TeamComponent } from './components/team/team.component';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { AdminPanelComponent } from './components/admin-panel/admin-panel.component';
import { AdminInnerGuard } from './guard/admin-inner.guard';
import { AdminEventsComponent } from './components/admin-events/admin-events.component';
import { AdminViewComponent } from './components/admin-view/admin-view.component';
import { AdminVdetailsComponent } from './components/admin-vdetails/admin-vdetails.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';
import {TableComponent} from './components/table/table.component';
import { AdminFeedbackComponent } from './components/admin-feedback/admin-feedback.component';



const routes: Routes = [
  {path : 'home', component : HomeComponent },
  {path : 'events', component : EventsComponent },
  {path : 'domains', component : DomainsComponent },
  {path : 'team', component : TeamComponent },
  {path : 'aboutus', component : AboutusComponent },
  {path : 'blogs', component : BlogListComponent },
  {path : 'blogdetail/:id', component : BlogDetailComponent},
  {path : 'new', component : NewBlogComponent, canActivate : [AuthGuard] },
  {path : 'reviewblogs', component : AdminComponent, canActivate : [AuthGuard]},
  {path : 'profile', component : ProfileComponent, canActivate : [AuthGuard]}, 
  {path : 'uploadGallery', component : UploaderComponent, canActivate : [AuthGuard]},
  {path : 'gallery', component : ViewGalleryComponent },
  {path : 'login', component : LoginComponent, canActivate : [SecureInnerPagesGuard]},
  {path : 'forgot', component : ForgotPasswordComponent, canActivate : [SecureInnerPagesGuard]},
  {path : 'verify', component : VerifyEmailComponent, canActivate : [SecureInnerPagesGuard]},
  {path : 'signup', component : SignupComponent, canActivate : [SecureInnerPagesGuard]},
  {path : 'admin', component : AdminLoginComponent, canActivate : [AdminInnerGuard]},
  {path : 'adminPanel', component : AdminPanelComponent, canActivate : [ AuthGuard ]},
  {path : 'adminEvents', component : AdminEventsComponent, canActivate : [ AuthGuard ]},
  {path : 'adminView', component : AdminViewComponent, canActivate : [ AuthGuard ]},
  {path: 'table', component: TableComponent, canActivate: [AuthGuard]},
  {path: 'feedback', component: AdminFeedbackComponent, canActivate: [AuthGuard]},
  {path : 'adminDetails/:id' , component : AdminVdetailsComponent, canActivate : [ AuthGuard ]},


  {path : '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
