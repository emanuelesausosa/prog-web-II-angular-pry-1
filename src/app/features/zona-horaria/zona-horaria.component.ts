import { Component } from '@angular/core';

@Component({
  selector: 'zona-horaria',
  templateUrl: './zona-horaria.component.html',
  styleUrls: ['./zona-horaria.component.css'],
})
export class ZonaHorariaComponent {
  // modelo
  model: ZonaHorariaModel = new ZonaHorariaModel('New York', '12:25', 'PM');

  // variable por variable
  /**
   *  country: 'New York',
    hourly: '12:25',
    meridian: 'am',
   */
}

export class ZonaHorariaModel {
  constructor(
    private _country: string,
    private _hourly: string,
    private _meridian: string
  ) {}

  set country(value: string) {
    this._country = value;
  }

  set hourly(value: string) {
    this._hourly = value;
  }

  set meridian(value: string) {
    this._meridian = value;
  }

  get country() {
    return this._country;
  }

  get hourly() {
    return this._hourly;
  }

  get meridian() {
    return this._meridian;
  }
}

