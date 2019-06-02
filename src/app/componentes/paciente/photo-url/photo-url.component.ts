import { Component, OnInit, Input } from '@angular/core';
import {FirebaseStorageService} from '../../../services/firebase-storage.service';
import { identifierModuleUrl } from '@angular/compiler';

export class Upload {
  id: string;
  file: File;
  nombre: string;
  url: string;
  // tslint:disable-next-line: variable-name
  created_at: Date = new Date();
  constructor(file: File) {
      this.file = file;
  }
}


@Component({
  selector: 'app-photo-url',
  templateUrl: './photo-url.component.html',
  styleUrls: ['./photo-url.component.css']
})
export class PhotoUrlComponent implements OnInit {

  @Input() id;
  selectFiles: FileList;
  currentFileUpload: Upload;
  progress: { percentage: number } =  {percentage: 0 };
  color = 'primary';
  buffer = 'buffer';

  constructor() { }

  ngOnInit() {
  }

  selecteFile(event) {
    this.selectFiles = event.target.files;
  }

  upload() {
  }

}
