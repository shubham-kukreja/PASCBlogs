import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { firestore } from 'firebase/app';
import Timestamp = firestore.Timestamp;

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(
    public db: AngularFirestore
  ) { }

  createUser(value){
    return this.db.collection('events').add({
      topic: value.topic,
      description: value.description,
      venue: value.venue,
      date: value.date
    })
  }

  getUsers() {
    return this.db.collection('events').snapshotChanges().pipe(
      map(changes => {
          return changes.map(a => {
              const data = a.payload.doc.data() as any;
              Object.keys(data).filter(key => data[key] instanceof Timestamp)
                  .forEach(key => data[key] = data[key].toDate())
              data.id = a.payload.doc.id;
              return data;
          });
      })
  );;
  }

  deleteUser(userKey) {
    return this.db.collection('events').doc(userKey).delete();
  }
  updateUser(userKey,value) {
    return this.db.collection('events').doc(userKey).set(value);
  }
  getSelectedItem(id: string) {
  return this.db.collection('events').doc(id).valueChanges();
  } 
}
