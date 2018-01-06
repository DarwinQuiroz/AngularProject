import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ProductosService 
{
  productos: any[] = [];
  productos_filtrado: any[] = [];
  productosListos: boolean = false;

  constructor(private http: Http) 
  {
    this.cargar_productos();
  }

  cargar_productos()
  {
    if(this.productos.length == 0)
    {
      let promesa = new Promise((resolve, reject) => {
        this.http.get('https://portafolio-83ae5.firebaseio.com/productos_idx.json')
            .subscribe(res => {
              // console.log(res.json());
              setTimeout(() => {
                this.productos = res.json();
                this.productosListos = true;
                resolve();
              }, 300);
            })
      });

      return promesa;
    }
  }

  cargar_producto(cod: string)
  {
    return this.http.get(`https://portafolio-83ae5.firebaseio.com/productos/${cod}.json`)
  }

  buscar_producto(termino: string)
  {
    if(this.productos.length === 0)
    {
      this.cargar_productos().then(() => {
        this.filtrar_productos(termino);
      })
    }
    else
    {
      this.filtrar_productos(termino);
    }
    
  }

  private filtrar_productos(termino: string)
  {
    this.productos_filtrado = [];
    termino = termino.toLowerCase();

    this.productos.forEach(prod => {
      if(prod.categoria.indexOf(termino) >= 0 || prod.titulo.toLowerCase().indexOf(termino) >= 0)
      {
        this.productos_filtrado.push(prod);
      }
    })
  }
}
