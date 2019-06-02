import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'image'
})
export class ImagePipe implements PipeTransform {
   url_servicio: 'https://firebasestorage.googleapis.com/v0/b/clinica-rd.appspot.com/o/uploads';

  transform( img: string, tipo: string = 'usuario'): any {

    let url = this.url_servicio + '/img';
    if (!img) {
      return url + '../../assets/user.png';
    }
    if (img.indexOf('https') >= 0) {
      return img;
    }
    switch (tipo) {
      case 'empleado':
        url += '/empleado/' + img;
        break;
      case 'paciente':
        url += '/paciente/' + img;
        break;

      default: url += '../../assets/user.png';
    }
    return url;
  }

}
