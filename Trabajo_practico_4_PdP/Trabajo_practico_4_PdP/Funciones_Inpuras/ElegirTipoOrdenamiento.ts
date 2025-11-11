import { tarea } from "../elementoTarea/Tarea";

export function FormaVisualizar(tareas: tarea[], criterio: number): tarea[] { // funcion inpura 
    switch (criterio) {
        case 1:

            for(let i:number = 0; i<tareas.length-1;i++){
                 for(let j : number = 0 ; j< tareas.length-1 ; j++){
                    if (tareas[j].fechaCreacion.getTime() >tareas[j + 1].fechaCreacion.getTime()) {
                        let aux = tareas[j];
                        tareas[j] = tareas[j + 1];
                        tareas[j + 1] = aux;
                    }
                }
            }   

        break;

        case 2:

            for(let i:number = 0; i<tareas.length-1;i++){
                for(let j : number = 0 ; j< tareas.length-1 ; j++){
                    if (tareas[j].fechaCreacion.getTime() >tareas[j + 1].fechaCreacion.getTime()) {
                    let aux = tareas[j];
                    tareas[j] = tareas[j + 1];
                    tareas[j + 1] = aux;
                }
            }
        }

          
        break;
        case 3:

            for (let i:number = 0; i < tareas.length - 1; i++) {
                for (let j:number = 0; j < tareas.length - 1; j++) {
                    if (tareas[j].fechaCreacion.getTime() > tareas[j + 1].fechaCreacion.getTime()) {
                        let aux = tareas[j];
                        tareas[j] = tareas[j + 1];
                        tareas[j + 1] = aux;
                    }
                }
            }

        break;
    
    }

    return tareas;

}