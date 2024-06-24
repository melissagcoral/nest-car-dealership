import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class CarsService {
    private cars = [
        {
            id: 1,
            brand: 'Toyota',
            model: 'Corolla'
        },
        {
            id: 2,
            brand: 'Citroen',
            model: 'C4 Cactus'
        },
        {
            id: 3,
            brand: 'Jeep',
            model: 'Compass'
        }
    ];

    findAll() {
        return this.cars;
    }

    findByID(id: number) {
        const car = this.cars.find(x=> x.id === id);

        if (!car) throw new NotFoundException(`Car with id '${id}' not found`);
        
        return car;
        
    }
}
