import { Body, Controller, Delete, Get, Param, ParseUUIDPipe, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDTO } from './DTO/create-car.dto';
import { UpdateCarDTO } from './DTO/update-car.dto';

@Controller('cars')
export class CarsController {
    
    constructor(
        private readonly carsService: CarsService
    ) {}

    @Get()
    getAll() {
        return this.carsService.findAll();
    }

    @Get(':id')
    getById( @Param('id', new ParseUUIDPipe({ version: '4' })) id:string ) {
        console.info({id});

        return this.carsService.findByID(id);
    }

    @Post()
    @UsePipes( ValidationPipe )
    create( @Body() createCar: CreateCarDTO) {
        return this.carsService.create(createCar);
    }

    @Patch(':id')
    update( 
        @Param('id', ParseUUIDPipe) id: string,
        @Body() updateCar: UpdateCarDTO
    ) {
        return this.carsService.update(id, updateCar);
    }

    @Delete(':id')
    delete( @Param('id', ParseUUIDPipe) id: string) {
        return this.carsService.delete(id);
    }
}
