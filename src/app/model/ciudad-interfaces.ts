export interface ICiudad {
    id: number,
    nombre: string,
    comarcas: number
}

export interface ICiudad2Send {
    id: number,
    nombre: string
}

export interface IPageCiudad {
    content: ICiudad[];
    totalElements: number,
    totalPages: number
}