import {useEffect, useState} from 'react';
import axios from "axios";
import style from './todoList.module.css'

const TodoList = () => {
    const [todos, setTodos] = useState([])
    const [search, setSearch] = useState('')
    const [filters, setFilters] = useState([])
    useEffect(() => {
        const fetchTodo = async () => {
            try {
                const response = await axios.get('https://jsonplaceholder.typicode.com/todos')
                setTodos(response.data)
                setFilters(response.data)
            } catch (error) {
                console.error("Error", error)
            }
        }
        fetchTodo()
    }, [])

    const handleCheck = (id) => {
        setTodos(prevTodos => prevTodos.map((todo) => {
            if (todo.id === id) {
                return {
                    ...todo,
                    completed: !todo.completed
                }
            }
            return todo
        }))
    }

    useEffect(() => {
       const filtered = filters.filter((item) =>
       item.title.toLowerCase().includes(search.toLowerCase())
       )
        setTodos(filtered)
    }, [search, filters])

    const total = todos.length

    const completedTotal = todos.filter(todo => todo.completed).length


    return (
        <div>
            Всего: {total} Tasks: {completedTotal}
            Поиск: <input type="text" placeholder="Поиск по сайту" value={search} name="search"
                          onChange={(e) => setSearch(e.target.value)}/>
            <div>
                {todos.map((item) => (
                    <div key={item.id}>
                        <div className={style.color}>{item.id}. {item.title}
                            <input
                                type="checkbox"
                                checked={item.completed}
                                onChange={() => handleCheck(item.id)}
                            />
                        </div>
                    </div>

                ))}
            </div>
        </div>
    );
};

export default TodoList;