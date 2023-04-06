export interface Categoria {
    id: number,
    categoria: string,
    estado: boolean
}

export interface CategoriaDto extends Omit<Categoria, 'estado'>{
}
