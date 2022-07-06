import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPage } from '../interfaces/info-page.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPagesService {

  info: InfoPage = {};
  loade: boolean = false;

  team: any[] = []

  constructor( private http: HttpClient ) { 
    // console.log('Info page loade')
    this.loadeInfo();
    this.loadeTeam();
  }
  
  private loadeInfo() {
    //read Json
    this.http.get('assets/data/data-page.json')
    .subscribe( (resp: InfoPage) => {
      
      this.loade = true,
      this.info = resp;
      // console.log( resp ); 
    });
  }
  
  private loadeTeam() {
    
    this.http.get('https://angular-html-2482a-default-rtdb.firebaseio.com/Equipo.json')
    .subscribe( ( resp: any) => {
      
      this.team = resp;
      // this.loade = true,
      // this.info = resp,
      console.log( resp );
    })
  }
}
