import { I2Send } from "./model-interfaces";
import { IUserType } from "./tipousuario-interfaces";

export interface IUsuario {
    id: number,
    nombre: string,
    login: string,
    apellido1: string,
    apellido2: string,
    tlf:string,
    dni: string,
    codpostal:string,
    direccion:string,
    profesional:boolean,
    email: string,
    tipousuario: IUserType,
    validado: boolean,
    favoritos: number,
    viviendas:number
}

export interface formdata {
    accion:string,
    ciudad:number,
    comarca:number,
    zona:number
}
export interface IPageUsuario {
    content: IUsuario[];
    totalElements: number,
    totalPages: number
}

export interface IUsuario2Send {
    id: number,
    nombre: string,
    login: string,
    apellido1: string,
    apellido2: string,
    tlf:string,
    dni: string,
    codpostal:string,
    direccion:string,
    profesional:boolean,
    email: string,
    tipousuario: I2Send,
    validado: boolean,


}