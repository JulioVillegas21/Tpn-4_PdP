import type{ tarea } from "../elementoTarea/Tarea";

import PromptSync from "prompt-sync";
const prompt=PromptSync();


export function recibirDato(Dificultades:any):tarea{
    let titulo:string=prompt("Ingrese el titulo de la tarea: ");
    while(titulo==""){//verifica que el titulo no este vacio
        console.log("El titulo no puede estar vacio.");
        titulo=prompt("Ingrese el titulo de la tarea: ");
    }
    let descripcion:string=prompt("Ingrese la descripcion de la tarea(opcional): ");
    let dificultad:string=prompt("Ingrese la dificultad de la tarea ([1]facil,[2] medio,[3] dificil)(opcional): ");
    if(dificultad!=""){
       
       
        while( isNaN(parseInt(dificultad)) || parseInt(dificultad)<1  || parseInt(dificultad)>3){
   
            
            console.log("Dificultad invalida.");
            dificultad=prompt("Ingrese la dificultad de la tarea ([1]facil,[2] medio,[3] dificil)(opcional): ");
        }
    }
    
    
    
    let vencimiento1:string=prompt("Ingrese la fecha de vencimiento de la tarea (YYYY-MM-DD) o deje en blanco si no tiene: ");
    let vencimiento:Date|null=null;
    if(vencimiento1.trim()!==""){

        vencimiento=new Date(vencimiento1);
    }
    return crearTarea(titulo,descripcion,Dificultades[parseInt(dificultad)-1],vencimiento);
}


export function crearTarea(titulo:string,descripcion:string,dificultad:string,vencimiento:Date|null):tarea{
    const ahora= new Date();
    const tarea={
        titulo: titulo,
        descripcion: descripcion,
        dificultad: dificultad || "facil",//si no se ingresa dificultad queda en 1
        estado: "pendiente",//estado por deafult
        fechaCreacion:ahora,
        fechavencimiento: vencimiento || null,//si hay algo se pone sino queda null
        fechaultimaEdicion: ahora
    }
    return tarea;
}

export function agregarTarea(tareas:tarea[], nuevaTarea:tarea):tarea[]{ // unica funcion pura dentro de la carpeta inpura 
    return [...tareas, nuevaTarea];
}