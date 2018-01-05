import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ProductosService 
{
  productos: any[] = [];
  productosListos: boolean = false;

  constructor(private http: Http) 
  {
    this.cargar_productos();
  }

  cargar_productos()
  {
    if(this.productos.length == 0)
    {
      this.http.get('https://portafolio-83ae5.firebaseio.com/productos_idx.json')
          .subscribe(res => {
            console.log(res.json());
            this.productos = res.json();
            this.productosListos = true;
          })
    }
  }

}
