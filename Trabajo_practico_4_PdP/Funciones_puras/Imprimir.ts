export function Imprimir(dato:string):void{
    console.log(dato);
}
export function menu():string{
    return  `Seleccione una opcion: \n 1- Crear Tarea \n 2- Mostrar Tarea \n 3- Buscar Tarea \n 4- Salir `;
}

export function ImprimirEstados():string{
    return  `Seleccione una opcion: \n 1- Pedinte \n 2- En proceso \n 3- Termidas \n 4- Todas las tareas `;
}