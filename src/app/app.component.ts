import { Component } from '@angular/core';
import { InfoPagesService } from './services/info-pages.service';
import { ProductosService } from './services/productos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'Portafolio-Angular';

  constructor( public _infoPageService: InfoPagesService, 
               public ProductosService: ProductosService ){}

}
