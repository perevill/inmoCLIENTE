import { I2Send } from './model-interfaces';
import { ICiudad } from "./ciudad-interfaces";

export interface IZona {
    id: number,
    nombre: string,
    codpostal: string,
    ciudad: ICiudad;
}

export interface IZona2Send {
    id: number,
    nombre: string,
    codpostal:string,
    ciudad:I2Send
}

export interface IPageZona {
    content: IZona[];
    totalElements: number,
    totalPages: number
}