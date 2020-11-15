import { Injectable } from '@angular/core';
import { Favchars } from '../models/favchars/favchars'
import {
  Action,
  AngularFirestore,
  AngularFirestoreCollection,
  DocumentChangeAction,
  DocumentReference,
  DocumentSnapshot,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FavoritosService {

  private taskCollection: AngularFirestoreCollection<Favchars>;

    constructor(private db: AngularFirestore) {
      this.taskCollection = this.db.collection<Favchars>('favoritos');
    }

   
    getFavoritosId(id: string): Observable<Action<DocumentSnapshot<Favchars>>> {
      return this.taskCollection.doc<Favchars>(id).snapshotChanges();
    }

    
    createFavorito(newmetpago: Favchars): Promise<DocumentReference> {
      return this.taskCollection.add(newmetpago);
    }

    
    updateFavorito(data: Favchars, docId: string): Promise<void> {
      return this.taskCollection.doc<Favchars>(docId).update(data);
    }

    


}
