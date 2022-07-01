import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPage } from '../interfaces/info-page.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPagesService {

  info: InfoPage = {};
  loade: boolean = false;

  constructor( private http: HttpClient ) { 
    // console.log('Info page loade')

    //read Json
    this.http.get('assets/data/data-page.json')
      .subscribe( (resp: InfoPage) => {

        this.loade = true,
        this.info = resp;
        console.log( resp );
      });
  }
}
