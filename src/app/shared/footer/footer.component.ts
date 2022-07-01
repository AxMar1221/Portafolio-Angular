import { Component, OnInit } from '@angular/core';
import { InfoPagesService } from '../../services/info-pages.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  anio: number = new Date().getFullYear();

  constructor (public _service: InfoPagesService ) { }

  ngOnInit(): void {
  }

}
