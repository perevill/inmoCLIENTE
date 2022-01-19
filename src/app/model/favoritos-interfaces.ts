import { I2Send } from './model-interfaces';
import { IUsuario } from './usuario-interfaces';
import { IVivienda } from './vivienda-interfaces';
export interface IFavorito {
    id: number,
    usuario: IUsuario,
    vivienda: IVivienda
}

export interface IFavorito2Send {
    id: number,
    usuario: I2Send,
    vivienda:I2Send
}

export interface IPageFavorito{
    content: IFavorito[];
    totalElements: number,
    totalPages: number
}