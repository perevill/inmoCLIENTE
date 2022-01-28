import { I2Send } from './model-interfaces';
import { ICiudad } from "./ciudad-interfaces";
import { IComarca } from './comarca-interfaces';

export interface IZona {
    id: number,
    nombre: string,
    codpostal: string,
    comarca: IComarca;
}

export interface IZona2Send {
    id: number,
    nombre: string,
    codpostal:string,
    comarca:I2Send
}

export interface IPageZona {
    content: IZona[];
    totalElements: number,
    totalPages: number
}