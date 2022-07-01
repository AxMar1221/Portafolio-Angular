import { Component, OnInit } from '@angular/core';
import { InfoPagesService } from '../../services/info-pages.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor( public _service: InfoPagesService ) { }

  ngOnInit(): void {
  }

}
