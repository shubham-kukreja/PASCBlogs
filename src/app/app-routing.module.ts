import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogDetailComponent } from './components/blog-detail/blog-detail.component';
import { BlogListComponent } from './components/blog-list/blog-list.component';
import { NewBlogComponent } from './components/new-blog/new-blog.component';


const routes: Routes = [
  {path : 'home', component : BlogListComponent },
  {path : 'blogdetail/:id', component : BlogDetailComponent},
  {path : 'new', component : NewBlogComponent},
  {path : '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
