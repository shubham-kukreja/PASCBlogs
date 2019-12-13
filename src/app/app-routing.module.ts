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

const routes: Routes = [
  {path : 'home', component : BlogListComponent },
  {path : 'blogdetail/:id', component : BlogDetailComponent},
  {path : 'new', component : NewBlogComponent, canActivate : [AuthGuard] },
  {path : 'admin', component : AdminComponent, canActivate : [AuthGuard]},
  {path : 'profile', component : ProfileComponent, canActivate : [AuthGuard]}, 
  {path : 'uploadGallery', component : UploaderComponent, canActivate : [AuthGuard]},
  {path : 'gallery', component : ViewGalleryComponent, canActivate : [AuthGuard]},
  {path : 'login', component : LoginComponent, canActivate : [SecureInnerPagesGuard]},
  {path : 'forgot', component : ForgotPasswordComponent, canActivate : [SecureInnerPagesGuard]},
  {path : 'signup', component : SignupComponent, canActivate : [SecureInnerPagesGuard]},
  {path : '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
