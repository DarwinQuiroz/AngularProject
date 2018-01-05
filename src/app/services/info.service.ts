import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class InfoService
{
  info: any = {};
  infoLista: boolean = false;

  constructor(private http: Http)
  {
    this.http.get('assets/data/info.pagina.json').subscribe(
      data => {
        this.info = data.json()
        this.infoLista = true;
      }
    )
  }

}
