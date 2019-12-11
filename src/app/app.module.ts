import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BlogDetailComponent } from './components/blog-detail/blog-detail.component';
import { BlogListComponent } from './components/blog-list/blog-list.component';
import { BlogComponent } from './components/blog/blog.component';

import { environment } from '../environments/environment'
import { AngularFireModule } from 'angularfire2'
import {AngularFirestoreModule } from 'angularfire2/firestore'
import { BlogService } from './services/blog.service';
import { NewBlogComponent } from './components/new-blog/new-blog.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button'
import { MatInputModule } from '@angular/material/input'
import { FormsModule } from '@angular/forms'
import { MatProgressBarModule } from '@angular/material/progress-bar'
import { AngularFireStorageModule } from 'angularfire2/storage';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BlogDetailComponent,
    BlogListComponent,
    BlogComponent,
    NewBlogComponent
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
    MatProgressBarModule
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
