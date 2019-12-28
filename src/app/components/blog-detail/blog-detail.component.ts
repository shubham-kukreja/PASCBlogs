import { Component, OnInit } from '@angular/core';
import { Blog } from 'src/app/shared/blog';
import { BlogService } from 'src/app/services/blog.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { AngularFirestore, AngularFirestoreDocument} from 'angularfire2/firestore';
import { AuthService } from '../../services/auth.service';
import { AngularFireAuth } from "@angular/fire/auth";
import { Observable } from 'rxjs'


@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.css']
})
export class BlogDetailComponent implements OnInit {
    blog ;
    currentUser : any

  constructor(private blogService : BlogService, 
    private route : ActivatedRoute,
    private location : Location,
    public afs: AngularFirestore,public authService : AuthService, public angularFireAuth : AngularFireAuth) { }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this.blog = this.blogService.getSelectedBlogFromFirestore(id).subscribe(data => this.blog = data);
    this.blogService.provideId(id);

    setTimeout(() => {
      this.getAdmin()
     
    }, 1000);

  }
  markCompleted(id : string) {
    this.blogService.approve(id);
  }
  deleteBlog(id : string) {
    this.blogService.delete(id);
  }

  getAdmin()
  {
    this.afs.doc(`users/${this.angularFireAuth.auth.currentUser.uid}`).valueChanges().subscribe(item => {this.currentUser = item})

  }
  
}
