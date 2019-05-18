import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { auth } from 'firebase/app';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { AngularFireStorage } from '@angular/fire/storage';
import { finalize } from 'rxjs/operators';
import { Observable } from 'rxjs/internal/Observable';


import { Empleado } from '../../models/empleado';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  public email: '';
  public password: '';

  public photoUrl: Observable<string>;
  public uploadPercent: Observable<number>;

  private alert;
  private success;
  public isAdmin: true;
  public empleado: Empleado;
  public noRegisterSocial: false;

  constructor(private router: Router,
              private authService: AuthService,
              private uploadService: AngularFireStorage) { }
              @ViewChild('photoUrl') inputImageUser: ElementRef;

  ngOnInit() {
  }

  // funcion para subir avatar de empleado
  onUpload(e) {
    // console.log('subir', e.target.files[0]);
    const id = Math.random().toString(36).substring(2);
    const file = e.target.files[0];
    const filePath = `uploads/profile_${id}`;
    const ref = this.uploadService.ref(filePath);
    const task = this.uploadService.upload(filePath, file);
    this.uploadPercent = task.percentageChanges();
    task.snapshotChanges().pipe(finalize(() => this.photoUrl = ref.getDownloadURL())).subscribe();
  }

  // acceso para solo pacientes, no se usará, pero se deja definido
  onLoginGoogle(): void {
    this.authService.loginGoogleUser()
      .then((res) => {
        this.onLoginRedirect();
      }).catch(err => console.log('err', err.message));
  }
  onLoginFacebook(): void {
    this.authService.loginFacebookUser()
      .then((res) => {
        this.onLoginRedirect();
      }).catch(err => console.log('err', err.message));
  }

  // registro de usuarios con firebase
  registroEmpleado(email: string, password: string) {
    this.authService.registroEmpleados(this.email, this.password)
      .then((res) => {
        this.authService.isAuth().subscribe(user => {
          if (user) {
            user.updateProfile({
              displayName: '',
              photoURL: this.inputImageUser.nativeElement.value
            }).then(() => {
              this.router.navigate(['privado/mi-perfil']);
            }).catch((error) => console.log('error', error));
          }
        });
      }).catch(err => console.log('err', err.message));
  }


  onLoginRedirect(): void {
    this.router.navigate(['privado/citas']);
  }

  onSocialRedirect(): void {
    this.router.navigate(['privado/mi-perfil']);
  }


}
