import React from "react";
import { TodoCounter } from "../TodoCounter/index.js";
import { TodoContext } from "../TodoContext/index.js";
import { TodoItem } from "../TodoItem/index.js";
import { CreateTodoButton } from "../CreateTodoButton/index.js";
import { TodoList } from "../TodoList/index.js";
import { TodoSearch } from "../TodoSearch/index.js";

function AppUI(){
    return (
        <React.Fragment>
            <TodoCounter />
    
            <TodoSearch />

            <TodoContext.Consumer>
                {({
                    error,
                    loading,
                    searchedTodos,
                    completeTodo,
                    deleteTodo,
                }) => (
                    <TodoList>
                        {error && <p>Desespérate, hubo un error...</p>}
                        {loading && <p>Estamos cargando, no desesperes...</p>}
                        {(!loading && !searchedTodos.length) && <p>¡Crea tu primer TODO!</p>}
                        
                        {searchedTodos.map(todo => (
                        <TodoItem
                            key={todo.text}
                            text={todo.text}
                            completed={todo.completed}
                            onComplete={() => completeTodo(todo.text)}
                            onDelete={() => deleteTodo(todo.text)}
                        />
                        ))}
                    </TodoList>
                )}
            </TodoContext.Consumer>
    
            <CreateTodoButton />
        
        </React.Fragment>
    );
}

export { AppUI }