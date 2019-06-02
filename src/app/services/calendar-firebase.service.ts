import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map, tap, shareReplay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CalendarFirebaseService {

  public eventsCollection: AngularFirestoreCollection<any[]>;
  public events$: Observable<any[]>;

  constructor(private db: AngularFirestore) {
    this.eventsCollection = this.db.collection<any[]>('events');
    this.events$ = this.mapAndReplayCollection(this.eventsCollection);
  }

  private mapAndReplayCollection(collection: AngularFirestoreCollection<any[]>): any {
   return collection.snapshotChanges()
      .pipe(
        map(changes => {
          return changes.map(a => {
        // tslint:disable-next-line: semicolon
           return { realId: a.payload.doc.id, ...a.payload.doc.data() }
          });
        }),
       shareReplay(1),
    );
  }

}
