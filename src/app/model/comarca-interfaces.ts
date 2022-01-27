import { ICiudad } from "./ciudad-interfaces";
import { I2Send } from "./model-interfaces";

export interface IComarca {
    id: number,
    nombre: string,
    ciudad: ICiudad;
    zonas: number

}

export interface IComarca2Send {
    id: number,
    nombre: string
    ciudad:I2Send

}

export interface IPageComarca {
    content: IComarca[];
    totalElements: number,
    totalPages: number
}