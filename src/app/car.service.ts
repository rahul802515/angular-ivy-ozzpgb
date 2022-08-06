import { Injectable } from '@angular/core';
import { Car } from './car';
import * as faker from 'faker/locale/ja';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  constructor() {}

  car_list: Car[];

  getData(numOfCars: number) {
    for (let i = 0; i <= numOfCars; i++) {
      this.car_list.push(this.getCar());
    }

    return this.car_list;
  }

  getCar() {
    return {
      name: faker.vehicle.vehicle(),
      model: faker.vehicle.model(),
      yearOfRelease: faker.datatype.number({ min: 1900, max: 2025 }),
      brand: faker.vehicle.manufacturer(),
      color: faker.vehicle.color(),
    };
  }
}
