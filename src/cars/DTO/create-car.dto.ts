import { IsString } from "class-validator";


export class CreateCarDTO {

    @IsString({ message: 'La marca debe ser un string'})
    readonly brand: string;

    @IsString()
    readonly model: string;
}