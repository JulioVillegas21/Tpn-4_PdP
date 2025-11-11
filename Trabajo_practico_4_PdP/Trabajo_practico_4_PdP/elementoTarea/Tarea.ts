
//import { Confirmacion, pedirNumero } from "./Controles";

export const dificultad : string[] = ["Facil 🌕🌑🌑", "Medio 🌕🌕🌑", "Dificil 🌕🌕🌕"];
export const estado : string[] = ["Pendiente" , "En curso", "Terminada" , "Cancelada"];
export const ordenamiento : string[] = ["Alfabetico ascendente" , "Fecha de vencimiento acendente" , "Por fecha de creacion acendente"];

export interface tarea{
    titulo: string , 
    descripcion: string ,
    estado: string ,
    dificultad: string ,
    fechaCreacion: Date ,
    fechavencimiento: Date | null ,
    fechaultimaEdicion: Date ,
};

export function toString(this:tarea):string{
    return `Titulo:${this.titulo} \n Descripcion: ${this.descripcion} \n Estado: ${this.estado} \n Dificultad: ${this.dificultad} \n Fecha de Creacion: ${this.fechaCreacion} \n Fecha de Vencimiento: ${this.fechavencimiento} \n Fecha de Ultima Edicion: ${this.fechaultimaEdicion}`;
}

export function mostrarTitulo(tarea:tarea):string{
    return `Titulo${tarea.titulo}`;
}

export function agregarTarea(tareas:tarea[], nuevaTarea:tarea):tarea[]{
    return [...tareas, nuevaTarea];
}

