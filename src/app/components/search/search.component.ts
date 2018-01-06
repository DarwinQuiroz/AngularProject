import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent
{
  termino: string = undefined;

  constructor(private route: ActivatedRoute, public productosService: ProductosService) 
  {
    this.route.params.subscribe(params => {
      this.termino = params['termino'];
      this.productosService.buscar_producto(this.termino);
    })
  }
}
