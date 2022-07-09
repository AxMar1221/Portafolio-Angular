import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../interfaces/productos.interface';
// import { Producto } from '../interfaces/productos.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  loade = true;
  productos: Producto[] = [];
  productosFiltrado: Producto[] = [];

  constructor( private http: HttpClient) { 

  this.cargarProductos();

  }

  private cargarProductos() {

    return new Promise( ( resolve, rejet ) => {

      this.http.get('https://angular-html-2482a-default-rtdb.firebaseio.com/productos_idx.json')
        .subscribe( ( resp: any) => {
          this.productos = resp;
          this.loade = false;
        });
    });

  }

  getProducto ( id: string ){
    
    return this.http.get(`https://angular-html-2482a-default-rtdb.firebaseio.com/productos/${ id }.json`)
  
  }

  buscarProducto( termino: string ){

    if( this.productos.length === 0 ){
      this.cargarProductos().then( () => {
        this.filtrarProductos( termino );
      })
    }else{
      this.filtrarProductos( termino );
    }
  }

  private filtrarProductos( termino: string ) {

    this.productosFiltrado = [];

    termino = termino.toLocaleLowerCase();

    this.productos.forEach( prod => {

      const tituloLower = prod.titulo.toLocaleLowerCase();

      if ( prod.categoria.indexOf( termino ) >= 0 || tituloLower.indexOf( termino) >= 0 ){
        this.productosFiltrado.push( prod );
      }
    });
  }
}