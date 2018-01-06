import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { InfoService } from '../../services/info.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: []
})
export class HeaderComponent
{
  constructor(public infoService: InfoService, private router: Router) { }

  buscar_producto(termino: string)
  {
    this.router.navigate(['buscar', termino]);
  }
}
