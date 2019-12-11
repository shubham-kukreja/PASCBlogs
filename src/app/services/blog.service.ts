import { Injectable } from '@angular/core';
import { Blog } from '../shared/blog';
import { BLOGS } from '../shared/blogsData';

import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class BlogService {
  itemsCollection : AngularFirestoreCollection<Blog>
  items : Observable<Blog[]>
  getBlogs(): Blog[]{
    return BLOGS;
  }
  getSelectedBlog(id : string):Blog {
    return BLOGS.filter((blog) => (blog.id === id))[0];
  }
  constructor(public afs: AngularFirestore) { 
    
  }
  getBlogsFromFirestore() {
    this.items = this.afs.collection('blogs').valueChanges();
    return this.items
  }
}
