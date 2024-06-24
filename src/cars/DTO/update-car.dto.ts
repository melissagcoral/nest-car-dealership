import { IsOptional, IsString, IsUUID } from "class-validator";


export class UpdateCarDTO {

    @IsUUID()
    @IsOptional()
    readonly id?: string;

    @IsString({ message: 'La marca debe ser un string'})
    @IsOptional()
    readonly brand?: string;

    @IsString()
    @IsOptional()
    readonly model?: string;
}