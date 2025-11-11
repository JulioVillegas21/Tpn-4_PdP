import { tarea } from "../elementoTarea/Tarea";

export function buscarTarea(tareas: tarea [], titulo:string): tarea | undefined {
    return tareas.find(tarea => tarea.titulo.toLowerCase() === titulo.toLowerCase());
};