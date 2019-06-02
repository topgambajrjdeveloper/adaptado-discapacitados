import { Injectable } from '@angular/core';
import { DataApiService, AuthService } from './index.service';
import * as firebase from 'firebase';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})

export class Upload {
  id: string;
  file: File;
  nombre: string;
  url: string;
  // tslint:disable-next-line: variable-name
  created_at: Date = new Date();
}

export class FirebaseStorageService {
  private basePath = '/uploads';

  constructor( private afs: AngularFirestore ) { }

  pushFileStorage(fileUpload: Upload, progress: {percentage: number}, id: any) {
      const storageRef = firebase.storage().ref();
      const fileId = `uploads/profile_${id}`;
      const uploadTask = storageRef.child(`${this.basePath}/${fileId}`).put(fileUpload.file);


      uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED, (snapshot) => {
        const snap = snapshot as firebase.storage.UploadTaskSnapshot;
        progress.percentage = Math.round((snap.bytesTransferred / snap.totalBytes) * 100);
      }, (error) => {
        // Manejar el Error
        console.log('El Email ya existe', error);
      },
      () => {
        // Todo ok
        fileUpload.id = fileId;
        // tslint:disable-next-line: deprecation
        fileUpload.url = uploadTask.snapshot.downloadURL;
        fileUpload.nombre = fileUpload.file.name;
        this.saveFileDate(fileUpload, id);
      });
  }

  private saveFileDate(fileUpload: Upload, id) {
    // tslint:disable-next-line: prefer-const
    let usuario = this.afs.collection('profile').doc(id);
    // tslint:disable-next-line: prefer-const
    let newRef = usuario.collection('uploads').doc(fileUpload.id);
    newRef.set({
      id: fileUpload.id,
      nombre: fileUpload.nombre,
      url: fileUpload.url
    });
  }

  public remodeFile( fileId ) {
    return firebase.storage().ref().child(`${this.basePath}/$(fileId)`).delete();
  }


}
