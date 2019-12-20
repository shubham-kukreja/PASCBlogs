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
  {path : 'signup', component : SignupComponent, canActivate : [SecureInnerPagesGuard]},
  {path : '', redirectTo: '/blogs', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
