import { ordenamiento, tarea } from "../elementoTarea/Tarea";
import { menu , ImprimirEstados  } from "../Funciones_puras/imprimir";
import { crearTarea, agregarTarea , recibirDato } from "../Funciones_Inpuras/CrearTarea";
import PromptSync from "prompt-sync";
import { FiltrarEstados, ValidarArreglo , ImprimirTitulos } from "../Funciones_puras/ElegirTipoTarea";
import { dificultad, estado } from "../elementoTarea/Tarea";
import { FormaVisualizar } from "../Funciones_Inpuras/ElegirTipoOrdenamiento";
import { editarTareaPorIndice } from "../Funciones_puras/ElegirTipoTarea";

function main():void{

let tareas:tarea[]=[];

let n:number;

do{
    console.log(menu());
    switch(n=Number(prompt("Ingrese una opcion: "))){
        case 1:

            const nuevaTarea:tarea=recibirDato(dificultad);
            tareas= agregarTarea(tareas,nuevaTarea);
        break;



        case 2:

            console.log(ImprimirEstados());

            let estadoSeleccionado:string = prompt("Ingrese una opcion: ")?.trim () || "";

            while( isNaN(parseInt(estadoSeleccionado)) || parseInt(estadoSeleccionado)<1 || parseInt(estadoSeleccionado)>4 ){
                console.log("Estado invalido.");
                console.log(ImprimirEstados());
                estadoSeleccionado=prompt("Ingrese una opcion: ")?.trim () || "";
            }
            

            let tareasFiltradas : tarea [] = FiltrarEstados(tareas, estado ,parseInt(estadoSeleccionado));

            if(ValidarArreglo(tareasFiltradas)){

                console.log("Porfavor el tipo de ordenamiento que desea: ");

                console.log(`1- ${ordenamiento[0]} \n 2- ${ordenamiento[1]} \n 3- ${ordenamiento[2]}`);

                let criterioOrdenamiento:string=prompt("Ingrese una opcion: ")?.trim() || "";

                while( isNaN(parseInt(criterioOrdenamiento)) || parseInt(criterioOrdenamiento)<1 || parseInt(criterioOrdenamiento)>3 ){
                    console.log("Criterio invalido.");
                    console.log(`1- ${ordenamiento[0]} \n 2- ${ordenamiento[1]} \n 3- ${ordenamiento[2]}`);
                    criterioOrdenamiento=prompt("Ingrese una opcion: ")?.trim() || "";
                }

                tareasFiltradas=FormaVisualizar(tareasFiltradas,parseInt(criterioOrdenamiento));
                console.log("Porfavor elija una de las siguientes tareas: ");
                console.log(ImprimirTitulos(tareasFiltradas,0));

                let opcionTarea:string=prompt("Ingrese el numero de la tarea")?.trim() || "";

                while( isNaN(parseInt(opcionTarea)) || parseInt(opcionTarea)<1 || parseInt(opcionTarea)>tareasFiltradas.length ){
                    console.log("Tarea invalida.");
                    opcionTarea=prompt("Ingrese el numero de la tarea")?.trim() || "";
                }

                const tareaSeleccionada:tarea= tareasFiltradas[parseInt(opcionTarea)-1];

                console.log(`Titulo: ${tareaSeleccionada.titulo} \n Descripcion: ${tareaSeleccionada.descripcion} \n Dificultad: ${tareaSeleccionada.dificultad} \n Estado: ${tareaSeleccionada.estado} \n Fecha de creacion: ${tareaSeleccionada.fechaCreacion} \n Fecha de vencimiento: ${tareaSeleccionada.fechavencimiento} \n Fecha de ultima edicion: ${tareaSeleccionada.fechaultimaEdicion}`);

                console.log("-----\n");

                console.log("Desea editar esta tarea? (s/n)");
                let respuesta:string=prompt("Ingrese su respuesta: ")?.trim().toLowerCase() || "";

                while(respuesta!="s" && respuesta!="n"){
                    console.log("Respuesta invalida.");
                    respuesta=prompt("Ingrese su respuesta: ")?.trim().toLowerCase() || "";
                }

                if (respuesta === "s") {
                    let nuevoTitulo = prompt("Nuevo título (dejar vacío para mantener):")?.trim();
                    while (nuevoTitulo === "") {
                        console.log("El título no puede quedar vacío. Si no desea cambiarlo, escriba el título actual o pulse Enter.");
                        nuevoTitulo = prompt("Nuevo título (dejar vacío para mantener):")?.trim();
                    }
                    const nuevaDescripcion = prompt("Nueva descripción (dejar vacío para mantener):")?.trim();

                    // Validar dificultad
                    let nuevaDificultad = prompt("Nueva dificultad (dejar vacío para mantener):")?.trim();
                    while (nuevaDificultad && !dificultad.includes(nuevaDificultad)) {
                        console.log("Dificultad inválida. Opciones válidas: " + dificultad.join(", "));
                        nuevaDificultad = prompt("Nueva dificultad (dejar vacío para mantener):")?.trim();
                    }

                    // Validar estado
                    let nuevoEstado = prompt("Nuevo estado (dejar vacío para mantener):")?.trim();
                    while (nuevoEstado && !estado.includes(nuevoEstado)) {
                        console.log("Estado inválido. Opciones válidas: " + estado.join(", "));
                        nuevoEstado = prompt("Nuevo estado (dejar vacío para mantener):")?.trim();
                    }

                    // Validar fecha de vencimiento
                    let nuevaFechaVencimientoStr = prompt("Nueva fecha de vencimiento (YYYY-MM-DD, dejar vacío para mantener):")?.trim();
                    let nuevaFechaVencimiento: Date | null = tareaSeleccionada.fechavencimiento;
                    if (nuevaFechaVencimientoStr) {
                        const fecha = new Date(nuevaFechaVencimientoStr);
                        while (isNaN(fecha.getTime()) || nuevaFechaVencimientoStr.length !== 10) {
                            console.log("Fecha inválida. Debe ser en formato YYYY-MM-DD y válida.");
                            nuevaFechaVencimientoStr = prompt("Nueva fecha de vencimiento (YYYY-MM-DD, dejar vacío para mantener):")?.trim();
                            if (!nuevaFechaVencimientoStr) break;
                            fecha.setTime(Date.parse(nuevaFechaVencimientoStr));
                        }
                        if (nuevaFechaVencimientoStr && !isNaN(fecha.getTime())) {
                            nuevaFechaVencimiento = fecha;
                        }
                    }

                    const nuevosDatos: Partial<tarea> = {};
                    if (nuevoTitulo && nuevoTitulo !== tareaSeleccionada.titulo) nuevosDatos.titulo = nuevoTitulo;
                    if (nuevaDescripcion) nuevosDatos.descripcion = nuevaDescripcion;
                    if (nuevaDificultad) nuevosDatos.dificultad = nuevaDificultad;
                    if (nuevoEstado) nuevosDatos.estado = nuevoEstado;
                    nuevosDatos.fechavencimiento = nuevaFechaVencimiento;
                    nuevosDatos.fechaultimaEdicion = new Date();

                    const indiceOriginal = tareas.findIndex(t => t.titulo === tareaSeleccionada.titulo);
                    tareas = editarTareaPorIndice(tareas, indiceOriginal, nuevosDatos);
                    console.log("Tarea editada correctamente.");
                }

            }

            
            console.log("No hay tareas con ese estado.");
        break;

        case 3:
            const tituloBuscado = prompt("Ingrese el título de la tarea a buscar:")?.trim() || "";
            const tareaEncontrada = tareas.find(t => t.titulo.toLowerCase() === tituloBuscado.toLowerCase());
            if (tareaEncontrada) {
                console.log(`Titulo: ${tareaEncontrada.titulo} \n Descripcion: ${tareaEncontrada.descripcion} \n Dificultad: ${tareaEncontrada.dificultad} \n Estado: ${tareaEncontrada.estado} \n Fecha de creacion: ${tareaEncontrada.fechaCreacion} \n Fecha de vencimiento: ${tareaEncontrada.fechavencimiento} \n Fecha de ultima edicion: ${tareaEncontrada.fechaultimaEdicion}`);
                console.log("-----\n");
                console.log("¿Desea editar esta tarea? (s/n)");
                let respuestaEdicion = prompt("Ingrese su respuesta: ")?.trim().toLowerCase() || "";
                while(respuestaEdicion!="s" && respuestaEdicion!="n"){
                    console.log("Respuesta invalida.");
                    respuestaEdicion=prompt("Ingrese su respuesta: ")?.trim().toLowerCase() || "";
                }
                if (respuestaEdicion === "s") {
                    let nuevoTitulo = prompt("Nuevo título (dejar vacío para mantener):")?.trim();
                    while (nuevoTitulo === "") {
                        console.log("El título no puede quedar vacío. Si no desea cambiarlo, escriba el título actual o pulse Enter.");
                        nuevoTitulo = prompt("Nuevo título (dejar vacío para mantener):")?.trim();
                    }
                    if (nuevoTitulo && nuevoTitulo !== tareaEncontrada.titulo) tareaEncontrada.titulo = nuevoTitulo;

                    const nuevaDescripcion = prompt("Nueva descripción (dejar vacío para mantener):")?.trim();
                    if (nuevaDescripcion) tareaEncontrada.descripcion = nuevaDescripcion;

                    let nuevaDificultad = prompt("Nueva dificultad (dejar vacío para mantener):")?.trim();
                    while (nuevaDificultad && !dificultad.includes(nuevaDificultad)) {
                        console.log("Dificultad inválida. Opciones válidas: " + dificultad.join(", "));
                        nuevaDificultad = prompt("Nueva dificultad (dejar vacío para mantener):")?.trim();
                    }
                    if (nuevaDificultad) tareaEncontrada.dificultad = nuevaDificultad;

                    let nuevoEstado = prompt("Nuevo estado (dejar vacío para mantener):")?.trim();
                    while (nuevoEstado && !estado.includes(nuevoEstado)) {
                        console.log("Estado inválido. Opciones válidas: " + estado.join(", "));
                        nuevoEstado = prompt("Nuevo estado (dejar vacío para mantener):")?.trim();
                    }
                    if (nuevoEstado) tareaEncontrada.estado = nuevoEstado;

                    let nuevaFechaVencimientoStr = prompt("Nueva fecha de vencimiento (YYYY-MM-DD, dejar vacío para mantener):")?.trim();
                    if (nuevaFechaVencimientoStr) {
                        const fecha = new Date(nuevaFechaVencimientoStr);
                        while (isNaN(fecha.getTime()) || nuevaFechaVencimientoStr.length !== 10) {
                            console.log("Fecha inválida. Debe ser en formato YYYY-MM-DD y válida.");
                            nuevaFechaVencimientoStr = prompt("Nueva fecha de vencimiento (YYYY-MM-DD, dejar vacío para mantener):")?.trim();
                            if (!nuevaFechaVencimientoStr) break;
                            fecha.setTime(Date.parse(nuevaFechaVencimientoStr));
                        }
                        if (nuevaFechaVencimientoStr && !isNaN(fecha.getTime())) {
                            tareaEncontrada.fechavencimiento = fecha;
                        }
                    }

                    tareaEncontrada.fechaultimaEdicion = new Date();
                    console.log("Tarea editada correctamente.");
                }
            } else {
                console.log("No se encontró ninguna tarea con ese título.");
            }
            break;
        case 4:
    console.log("Saliendo...");
        break;
        default:
    console.log("Opcion invalida");
    }
}while(n!==4);
}
main();