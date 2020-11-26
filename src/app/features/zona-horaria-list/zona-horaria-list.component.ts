import { Component } from '@angular/core';
import { ZonaHorariaModel } from '../../commons/models/zona-horaria.model';

@Component({
  selector: 'zona-horaria-list',
  templateUrl: './zona-horaria-list.component.html', // *ngFor
  styleUrls: ['./zona-horaria-list.component.css'],
})
export class ZonaHorariaListComponent {
  // model: ZonaHorariaModel = new ZonaHorariaModel('New York', '12:25', 'PM');
  cities: ZonaHorariaModel[] = [
    new ZonaHorariaModel('New York', '09:25', 'PM'),
    new ZonaHorariaModel('Tegucigalpa', '07:25', 'PM'),
    new ZonaHorariaModel('Pekin', '06:00', 'AM'),
  ];
}
