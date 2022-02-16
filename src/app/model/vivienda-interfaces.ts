import { I2Send } from './model-interfaces';
import { IUsuario } from './usuario-interfaces';
import { ITipoVivienda } from './tipovivienda-interfaces';
import { IZona } from './zona-interfaces';
export interface IVivienda {
    id: number,
    ubicacion: string,
    precio: number,
    nplanta: number,
    m2utiles:number,
    m2construidos: number,
    zona: IZona,
    tipovivienda: ITipoVivienda,
    usuario:IUsuario,
    habitaciones:number,
    exterior: boolean,
    descripcion:string,
    antiguedad: number,
    conservacion:string,
    comprar:boolean,
    alquilar: boolean,
    obranueva: boolean,
    favoritos:number

}

export interface IVivienda2Send {
    id: number,
    ubicacion: string,
    precio: number,
    nplanta: number,
    m2utiles:number,
    m2construidos: number,
    zona: I2Send,
    tipovivienda: I2Send,
    anunciante:I2Send,
    habitaciones:number,
    exterior: boolean,
    descripcion:string,
    antiguedad: number,

    conservacion:string,
    comprar:boolean,
    alquilar: boolean,
    obranueva: boolean,
    
}

export interface IPageVivienda {
    content: IVivienda[];
    totalElements: number,
    totalPages: number
}