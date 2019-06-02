import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { AngularFireStorage } from '@angular/fire/storage';
import { finalize } from 'rxjs/operators';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {

  constructor(private router: Router, private authService: AuthService, private storage: AngularFireStorage) { }
  @ViewChild('imageUser') inputImageUser: ElementRef;

  // tslint:disable-next-line: no-inferrable-types
  public email: string = '';
  // tslint:disable-next-line: no-inferrable-types
  public password: string = '';

  uploadPercent: Observable<number>;
  urlImage: Observable<string>;

  ngOnInit() {
  }

  // funcion para subir avatar de empleado
  onUpload(e) {
    // console.log('subir', e.target.files[0]);
    const id = Math.random().toString(36).substring(2);
    const file = e.target.files[0];
    const filePath = `uploads/profile_${id}`;
    const ref = this.storage.ref(filePath);
    const task = this.storage.upload(filePath, file);
    this.uploadPercent = task.percentageChanges();
    task.snapshotChanges().pipe(finalize(() => this.urlImage = ref.getDownloadURL())).subscribe();
  }
  onAddUser() {
    this.authService.registroEmpleados(this.email, this.password)
      .then((res) => {
        this.authService.isAuth().subscribe(user => {
          if (user) {
            user.updateProfile({
              displayName: '',
              photoURL: this.inputImageUser.nativeElement.value
            }).then(() => {
              this.router.navigate(['/acceder']);
            }).catch((error) => console.log('error', error));
          }
        });
      }).catch(err => console.log('err', err.message));
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

  onLoginRedirect(): void {
    this.router.navigate(['privado/citas']);
  }

  onSocialRedirect(): void {
    this.router.navigate(['privado/mi-perfil']);
  }


}
