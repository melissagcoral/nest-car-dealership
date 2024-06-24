import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { CarsService } from './cars.service';

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
    getById( @Param('id', ParseIntPipe) id:number ) {
        console.info({id});


        return this.carsService.findByID(id);
    }

    @Post()
    create( @Body() body:any) {
        return body;
    }

    @Patch(':id')
    update( 
        @Param('id', ParseIntPipe) id: number,
        @Body() body: any
    ) {
        return body;
    }

    @Delete(':id')
    delete( @Param('id', ParseIntPipe) id: number) {
        return {
            method: 'deleted',
            id
        }
    }
}
