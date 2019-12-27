import { Injectable } from '@angular/core';
import { Blog } from '../shared/blog';
import { BLOGS } from '../shared/blogsData';

import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class BlogService {
  itemsCollection : AngularFirestoreCollection<Blog>
  items : Observable<Blog[]>
  itemDoc : AngularFirestoreDocument<Blog>
  Galleryitems : any 
  approveBlog : AngularFirestoreDocument<Blog>
  feedback: any;

  getBlogs(): Blog[]{
    return BLOGS;
  }
  getSelectedBlog(id : string):Blog {
    return BLOGS.filter((blog) => (blog.id === id))[0];
  }
  constructor(public afs: AngularFirestore, public router : Router) { 
      this.itemsCollection = this.afs.collection('blogs', ref => ref.where("approve" , "==", true).orderBy("date", "desc"))
  }
  getBlogsFromFirestore() {
    this.items = this.afs.collection('blogs', ref => ref.orderBy("date", "desc")).snapshotChanges().pipe(map( changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as Blog
        data.id = a.payload.doc.id;
        return data;
      })
    }))
    return this.items
  }
  getAdminBlogsFromFirestore() {
    this.items = this.afs.collection('blogs').snapshotChanges().pipe(map( changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as Blog
        data.id = a.payload.doc.id;
        
        if(!data.approve)
        {
          return data;
        }
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

  createfeed(value) {
    return this.afs.collection('feedback').add({
      name: value.name,
      subject: value.subject,
      email: value.email,
      text: value.text
    })
 }


 getFeedback() {
  return this.afs.collection('feedback').snapshotChanges().pipe(
    map(changes => {
      return changes.map(a => {
          const data = a.payload.doc.data() as any;
          data.id = a.payload.doc.id;
          return data;
        });
      })
  );

  return this.items
}

  getImages() {
    this.Galleryitems = this.afs.collection('files').valueChanges()
    return this.Galleryitems;
  }
  approve(id :string)
  {
    this.itemDoc = this.afs.doc<Blog>(`blogs/${id}`);
    this.itemDoc.update({approve : true})
  }
  delete(id : string)
  {
    this.itemDoc = this.afs.doc<Blog>(`blogs/${id}`);
    this.itemDoc.delete();
    this.router.navigate(['reviewblogs']);
  }
  provideId(id : string)
  {
    this.itemDoc = this.afs.doc<Blog>('blogs/' + id);
    this.itemDoc.update({id : id})
  }
}
