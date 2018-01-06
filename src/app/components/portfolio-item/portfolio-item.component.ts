import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-portfolio-item',
  templateUrl: './portfolio-item.component.html',
  styles: []
})
export class PortfolioItemComponent
{
  producto: any = undefined;
  cod: string = undefined;

  constructor(private route: ActivatedRoute, private productoService: ProductosService) 
  { 
    this.route.params.subscribe(params => {
      this.cod = params['item'];
      this.productoService.cargar_producto(this.cod).subscribe(
        res => this.producto = res.json()
      );
    });
  }

}
