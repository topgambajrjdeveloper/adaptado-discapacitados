import { Component, OnInit } from '@angular/core';
import { Router, ActivationEnd } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { Title, Meta, MetaDefinition } from '@angular/platform-browser';

@Component({
  selector: 'app-migaspan',
  templateUrl: './migaspan.component.html',
  styleUrls: ['./migaspan.component.css']
})
export class MigaspanComponent implements OnInit {

  titulo: string;


  constructor( private route: Router, private title: Title, private meta: Meta) {
    this.getDataRouter().subscribe( data => {
      this.titulo = data.titulo;
      this.title.setTitle( this.titulo );

      const metaTag: MetaDefinition = {
        name: 'description',
        content: this.titulo
      };
      this.meta.updateTag( metaTag );
    });
  }

  ngOnInit() {
  }

  getDataRouter() {
     return this.route.events.pipe(
      filter( tituloPage => tituloPage instanceof ActivationEnd ),
      filter ( (tituloPage: ActivationEnd ) => tituloPage.snapshot.firstChild === null ),
      map( (tituloPage: ActivationEnd ) => tituloPage.snapshot.data )
    );
  }

}
