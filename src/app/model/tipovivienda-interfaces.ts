export interface ITipoVivienda {
    id: number,
    nombre: string,
    viviendas: number
}

export interface ITipoVivienda2Send {
    id: number,
    nombre: string
}

export interface IPageTipoVivienda {
    content: ITipoVivienda[];
    totalElements: number,
    totalPages: number
}