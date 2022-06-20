function App() {
    const [todos, setTodos] = React.useState(
        [{
            text: 'Make a list',
            isCompleted: false,
        },
        {
            text: 'Create remove function',
            isCompleted: false,
        },
        {
            text: 'Make the list pretty',
            isCompleted: false,
        }]
    );
   
    const addTodo = text => {
        const newTodos = [...todos, {text:text, isCompleted:false}];
        setTodos(newTodos);
    }

    const removeTodo = index => {
        let temp = [...todos];
        temp.splice(index,1);
        setTodos(temp);
    }

    return (
        <div className="app">
            <div className="list-of-todos">
        {todos.map((todo, i) => 
            <Todo index={i} key={i} todo={todo} remove={removeTodo} />)}
           <TodoForm addTodo={addTodo} />
            </div>
        </div>
   
    );
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)