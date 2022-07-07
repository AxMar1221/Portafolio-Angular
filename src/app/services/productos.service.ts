import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { Producto } from '../interfaces/productos.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  loade = true;
  productos: any[] = [];
  constructor( private http: HttpClient) { 

  this.cargarProductos();

  }

  private cargarProductos() {

    this.http.get('https://angular-html-2482a-default-rtdb.firebaseio.com/productos_idx.json')
      .subscribe( ( resp: any) => {

        this.productos = resp;
        this.loade = false;
        console.log( resp );

      });
  }
}