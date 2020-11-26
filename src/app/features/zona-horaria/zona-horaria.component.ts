import { Component, Input } from '@angular/core';
import { ZonaHorariaModel } from '../../commons/models/zona-horaria.model';

@Component({
  selector: 'zona-horaria',
  templateUrl: './zona-horaria.component.html',
  styleUrls: ['./zona-horaria.component.css'],
})
export class ZonaHorariaComponent {
  @Input()
  city: any;
}
