import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class InfoService
{
  info: any = {};
  equipo: any = [];
  infoLista: boolean = false;
  infoNosotrosLista: boolean = false;

  constructor(private http: Http)
  {
    this.cargar_info();
    this.cargar_nosotros();
  }

  cargar_info()
  {
    this.http.get('assets/data/info.pagina.json').subscribe(
      data => {
        // console.log(data.json());
        this.info = data.json()
        this.infoLista = true;
      }
    )
  }

  cargar_nosotros()
  {
    this.http.get('https://portafolio-83ae5.firebaseio.com/equipo.json').subscribe(
      data => {
        // console.log(data.json());
        this.equipo = data.json();
        this.infoNosotrosLista = true;
      }
    )
  }
}
