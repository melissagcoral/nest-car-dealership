import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { Car } from './interfaces/car.interface';
import { v4 as uuid } from 'uuid';
import { CreateCarDTO, UpdateCarDTO } from './DTO';

@Injectable()
export class CarsService {
    private cars : Car[] = [
        // {
        //     id: uuid(),
        //     brand: 'Toyota',
        //     model: 'Corolla'
        // },
        // {
        //     id: uuid(),
        //     brand: 'Citroen',
        //     model: 'C4 Cactus'
        // },
        // {
        //     id: uuid(),
        //     brand: 'Jeep',
        //     model: 'Compass'
        // }
    ];

    findAll() {
        return this.cars;
    }

    findByID(id: string) {
        const car = this.cars.find(x=> x.id === id);

        if (!car) throw new NotFoundException(`Car with id '${id}' not found`);
        
        return car;
    }

    create( createCar: CreateCarDTO) {
        const newCar: Car = {
            id: uuid(),
            ...createCar
        }

        const car = this.cars.push(newCar);

        return newCar;
    }

    update( id: string, updateCar: UpdateCarDTO) {
        let carDB = this.findByID(id);

        if (updateCar.id && updateCar.id !== id) {
            throw new BadRequestException(`Car id is not valid inside body`);
        }

        this.cars = this.cars.map( car => {

            if (car.id === id) {
                carDB = { ...carDB, ...updateCar, id }
                return carDB;
            }

            return car;
        })
        return carDB;
    }

    delete( id: string ) {
        const car = this.findByID(id);

        this.cars = this.cars.filter( car => car.id !== id);
    }

    fillCarsWithSeedDB ( cars: Car[]) {
        this.cars = cars;
    }
}
