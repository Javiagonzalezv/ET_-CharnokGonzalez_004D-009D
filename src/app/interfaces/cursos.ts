//peticion get
export interface ICursos {
    id:String,
    asignatura:String,
    profesor:String,
    descripcion:String,
    fecha: Date,
      inscritos: [
        String
      ]
}