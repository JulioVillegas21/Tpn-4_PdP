import { tarea } from "../elementoTarea/Tarea.ts";
import { Imprimir, menu , ImprimirEstados  } from "../Funciones_puras/imprimir.ts";
import { crearTarea, agregarTarea , recibirDato } from "../Funciones_Inpuras/CrearTarea.ts";
import PromptSync from "prompt-sync";
import { FiltrarEstados, ValidarArreglo , ImprimirTitulos } from "../Funciones_puras/ElegirTipoTarea.ts";
import { dificultad, estado } from "../elementoTarea/Tarea.ts";


function main():void{

let tareas:tarea[]=[];

let n:number;

do{
    Imprimir(menu());
    switch(n=Number(prompt("Ingrese una opcion: "))){
        case 1:

            const nuevaTarea:tarea=recibirDato(dificultad);
            tareas= agregarTarea(tareas,nuevaTarea);
        break;



        case 2:

            console.log(ImprimirEstados());
            let estadoSeleccionado:string = prompt("Ingrese una opcion: ")?.trim () || "";

            while( isNaN(parseInt(estadoSeleccionado)) || parseInt(estadoSeleccionado)<1 || parseInt(estadoSeleccionado)>4 ){
                Imprimir("Estado invalido.");
                console.log(ImprimirEstados());
                estadoSeleccionado=prompt("Ingrese una opcion: ")?.trim () || "";
            }
            

            let tareasFiltradas : tarea [] = FiltrarEstados(tareas, estado ,parseInt(estadoSeleccionado));

            if(ValidarArreglo(tareasFiltradas)){
                console.log(ImprimirTitulos(tareasFiltradas,0));
            }
            
            else{
                Imprimir("No hay tareas con ese estado.");
            }













        break;






        case 3:
        break;
        case 4:
        Imprimir("Saliendo...");
        break;
        default:
        Imprimir("Opcion invalida");
    }
}while(n!==4);
}
main();