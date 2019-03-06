import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument  } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import * as firebase from 'firebase/app';
import { map } from 'rxjs/operators';

import { User, Category, Note, Label, NoteForm} from '../';

@Injectable()
export class ApiService {

  constructor(private afStore: AngularFirestore,
              private afStorage: AngularFireStorage) {}

  getNotes(uidUser:string):Observable<Note[]>{
    return this.afStore.collection<Note>(`/User/${uidUser}/Notes`).snapshotChanges().pipe(map(changes => {
        return changes.map(c => ({ uidNote: c.payload.doc.id, ...c.payload.doc.data() 
      }));
    }));
  }

  getNotesC(uidUser:string, uidCategory:string):Observable<Note[]>{
    return this.afStore.collection<Note>(`/User/${uidUser}/Notes`, ref => 
      ref.where("uidCategories", "array-contains", uidCategory)).snapshotChanges().pipe(map(changes => {
        return changes.map(c => ({ uidNote: c.payload.doc.id, ...c.payload.doc.data() 
      }));
    }));
  }

  getNotesLabels(uidUser:string, label:Label):Observable<Note[]>{
    return this.afStore.collection<Note>(`/User/${uidUser}/Notes`, ref => 
      ref.where("labels", "array-contains", label)).snapshotChanges().pipe(map(changes => {
        return changes.map(c => ({ uidNote: c.payload.doc.id, ...c.payload.doc.data() 
      }));
    }));
  }   

  getLabels(uidUser:string):Observable<Label[]>{
    return this.afStore.collection<Label>(`/User/${uidUser}/Labels`).snapshotChanges().pipe(map(changes => {
        return changes.map(c => ({ uidLabel: c.payload.doc.id, ...c.payload.doc.data() 
      }));
    }));
  }

  getCategories(uidUser:string):Observable<Category[]>{
    return this.afStore.collection<Category>(`/User/${uidUser}/Categories`).snapshotChanges().pipe(map(changes => {
        return changes.map(c => ({ uidCategory: c.payload.doc.id, ...c.payload.doc.data() 
      }));
    }));
  }

  updateNote(uidUser:string, uidNote:string, note:NoteForm){
    return this.afStore.collection<NoteForm>(`/User/${uidUser}/Notes`).doc(uidNote).update(note);
  }

  addUser(user:User){
    return this.afStore.collection<User>('/User').doc(user.uidUser).set(user);
  }

  addCategory(category:Category, uidUser:string){
    return this.afStore.collection<Category>(`/User/${uidUser}/Categories`).add(category);
  }

  addLabel(label:Label, uidUser:string){
    return this.afStore.collection<Label>(`/User/${uidUser}/Labels`).add(label);
  }

  addNote(note:NoteForm, uidUser:string){
    return this.afStore.collection<NoteForm>(`/User/${uidUser}/Notes`).add(note);
  } 

  deleteNote(uidUser:string, uidNote:string){
    return this.afStore.collection<User>(`/User/${uidUser}/Notes`).doc(uidNote).delete();
  }

  deleteLabel(uidUser:string, uidLabel:string){
    return this.afStore.collection<User>(`/User/${uidUser}/Labels`).doc(uidLabel).delete();
  }

   deleteLabelFromNote(uidUser:string, uidNote:string, labels:Label[]){
    return this.afStore.collection<User>(`/User/${uidUser}/Notes/`).doc(uidNote).update({
      labels: labels
    });
  } 
}
