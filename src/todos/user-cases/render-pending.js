import todoStore, { Filters } from "../../store/todo.store";

let element;
/**
 * 
 * @param {Syting} elementId 
 */
export const renderPending = ( elementId ) => {
    if(!element){ 
        element = document.querySelector( elementId );
     };

    if(!element){
        throw new Error(`Elmente ${elementId} not found`)
    };

    element.innerHTML = todoStore.getTodos(Filters.Pending).length;
}