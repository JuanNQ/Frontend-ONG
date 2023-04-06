export interface Producto {
  id: string,
  nombre: string,
  precio: number,
  descripcion: string,
  imagen: string,
  fechaCreacion: Date,
  fechaModificacion: Date,
  categoria: number,
  stock: number,
  codigo: string,
  estado: boolean
}

export interface listarProductosTotalesDto extends Omit<Producto, 'fechaCreacion' | 'fechaModificacion' | 'categoria'
| 'stock' | 'codigo' | 'estado'>{
}
