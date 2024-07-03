import './style.css'
import { App } from "./src/todos/app.component.js";
import todoStore from "./src/store/todo.store.js";

App('#app');
todoStore.initStore()

