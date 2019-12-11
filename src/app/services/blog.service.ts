import { Injectable } from '@angular/core';
import { Blog } from '../shared/blog';
import { BLOGS } from '../shared/blogsData';

import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class BlogService {
  itemsCollection : AngularFirestoreCollection<Blog>
  items : Observable<Blog[]>
  itemDoc : AngularFirestoreDocument<Blog>
  getBlogs(): Blog[]{
    return BLOGS;
  }
  getSelectedBlog(id : string):Blog {
    return BLOGS.filter((blog) => (blog.id === id))[0];
  }
  constructor(public afs: AngularFirestore) { 
      this.itemsCollection = this.afs.collection('blogs', ref => ref.orderBy('date', 'desc'))
  }
  getBlogsFromFirestore() {
    this.items = this.afs.collection('blogs').snapshotChanges().pipe(map( changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as Blog
        data.id = a.payload.doc.id;
        console.log(data)
        return data;
      })
    }))
    return this.items
  }
  getSelectedBlogFromFirestore(id : string){
    this.itemDoc = this.afs.doc<Blog>(`blogs/${id}`);
    return this.itemDoc.valueChanges()
  }
  create(data : Blog) {
    this.itemsCollection.add(data)
  }
}
