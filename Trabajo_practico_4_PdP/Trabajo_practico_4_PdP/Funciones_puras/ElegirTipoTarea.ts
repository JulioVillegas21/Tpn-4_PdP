import type { tarea } from "../elementoTarea/Tarea";

export function FiltrarEstados(Tareas: tarea[], estado : string[] , seleccion: number ) : tarea[] {

    if(seleccion == 4 ){
        return Tareas;
    }


    const estadoSeleccionado  = estado[seleccion-1];


    return Tareas.filter((tarea) => tarea.estado == estadoSeleccionado);

}

export function VerTodasLasTareas(Tareas: tarea[]): tarea[] {
    return Tareas;
}

export function ValidarArreglo(Tareas: tarea[]): boolean {

    if (Tareas.length === 0) {
        return false;
    } else {
        return true;
    }
}

export function ImprimirTitulos(tareas: tarea[], contador: number): string {

  if (contador === 0) {
    return `Estado: ${tareas[0].estado} - ${tareas[0].titulo}`;
  }
  const actual = `Estado: ${tareas[contador].estado} - ${tareas[contador].titulo}`;
  return actual + "\n" + ImprimirTitulos(tareas, contador + 1);
}

// Función pura para editar una tarea por índice
export function editarTareaPorIndice(tareas: tarea[], indice: number, nuevosDatos: Partial<tarea>): tarea[] {
    return tareas.map((t, i) => i === indice ? { ...t, ...nuevosDatos, fechaultimaEdicion: nuevosDatos.fechaultimaEdicion || new Date() } : t);
}

// Función pura para editar una tarea por título
export function editarTareaPorTitulo(tareas: tarea[], titulo: string, nuevosDatos: Partial<tarea>): tarea[] {
    return tareas.map(t => t.titulo.toLowerCase() === titulo.toLowerCase() ? { ...t, ...nuevosDatos, fechaultimaEdicion: nuevosDatos.fechaultimaEdicion || new Date() } : t);
}

// Función pura para mostrar todas las tareas como string
export function mostrarTodasLasTareas(tareas: tarea[]): string {
    if (tareas.length === 0) return "No hay tareas.";
    return tareas.map(t => `Titulo: ${t.titulo}\nDescripcion: ${t.descripcion}\nEstado: ${t.estado}\nDificultad: ${t.dificultad}\nFecha de Creacion: ${t.fechaCreacion}\nFecha de Vencimiento: ${t.fechavencimiento}\nFecha de Ultima Edicion: ${t.fechaultimaEdicion}\n---`).join("\n");
}

// Función pura para mostrar una tarea encontrada por título
export function mostrarTareaPorTitulo(tareas: tarea[], titulo: string): string {
    const tarea = tareas.find(t => t.titulo.toLowerCase() === titulo.toLowerCase());
    if (!tarea) return "Tarea no encontrada.";
    return `Titulo: ${tarea.titulo}\nDescripcion: ${tarea.descripcion}\nEstado: ${tarea.estado}\nDificultad: ${tarea.dificultad}\nFecha de Creacion: ${tarea.fechaCreacion}\nFecha de Vencimiento: ${tarea.fechavencimiento}\nFecha de Ultima Edicion: ${tarea.fechaultimaEdicion}`;
}

