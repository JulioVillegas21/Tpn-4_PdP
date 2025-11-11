import type { tarea } from "../elementoTarea/Tarea";

export function FiltrarEstados(Tareas: tarea[], estado : string[] , seleccion: number ) : tarea[] {

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

