import { tarea } from "../elementoTarea/Tarea.ts";

function FormaVisualizar(tareas: tarea[], criterio: string): tarea[] { // funcion inpura 
    switch (criterio) {
        case "Alfabetico ascendente":

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

        case "fecha de vencimiento ascendente":

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
        case "fecha de creacion ascendente":

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