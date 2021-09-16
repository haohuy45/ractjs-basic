import React from 'react';
import AddTodoComponent from './AddTodoComponent';
import { ToastContainer, toast } from 'react-toastify';
import TodoList from './TodoList.scss'
import Color from '../HOC/color';



class TodoListComponent extends React.Component {
    state = {
        listTodos: [
            { id: 'todo1', title: 'Math' },
            { id: 'todo2', title: 'History' },
            { id: 'todo3', title: 'Music' }
        ],
        editTodo: {}
    
    }

    addNewTodo = (todo) =>{
        this.setState({
            listTodos: [...this.state.listTodos, todo]
        })
        
        // localStorage.setItem('title', this.state.listTodos.id ? this.state.listTodos.title : '')

        toast.success("Wow so easy!");
    }

    // componentDidMount() {
    //     this.documentData = JSON.parse(localStorage.getItem('document'));
    //     console.log(this.documentData)

    //     if (localStorage.getItem('document')) {
    //         this.setState({
    //             listTodos: [this.documentData]
    //         })
    //     } else {
    //         this.setState({
    //             listTodos: [...this.state.listTodos, this.documentData]
    //         })
    //     }
    // }

    deleteTodo = (todo)=>{
        this.setState({
            listTodos: [...this.state.listTodos].filter(item => item.id !== todo.id)
        })

    }


    handleEditTodo = (todo) => {
        let {editTodo, listTodos} = this.state;

        let isEmptyObj = Object.keys(editTodo).length === 0;

        if(isEmptyObj === false && editTodo.id === todo.id){
            let listTodosCoppy = [...listTodos];

            let objIndex = listTodosCoppy.findIndex((item => item.id === todo.id))

            listTodosCoppy[objIndex].title = editTodo.title;

            this.setState({
                listTodos: listTodosCoppy,
                editTodo:{}
            })
            toast.success('Update todo success')

            return;
        }

        this.setState({
            editTodo: todo,

        })

    }
    handleOnChangeEditTodo = (e) =>{
        let editTodoCoppy = {...this.state.editTodo}
        editTodoCoppy.title = e.target.value
        this.setState({
            editTodo: editTodoCoppy
        })
    }


    render() {
        let { listTodos, editTodo} = this.state;
        let isEmptyObj = Object.keys(editTodo).length === 0;

        return <div className="list-todo-container">
            <h1>Todo App</h1>
            <AddTodoComponent addNewTodo={this.addNewTodo}/>
            <div className="list-todo-content">
                {listTodos && listTodos.length > 0 && listTodos.map((item, index) => {
                    return(
                        
                        <div className="todo-child" key={item.id}>
                            <div className="content">

                                {   isEmptyObj === true ? 
                                <span>{index + 1} - <span>{item.title}</span></span> 
                                : 
                                <>
                                    {editTodo.id === item.id ?

                                        <span>{index + 1} - <input value={editTodo.title} onChange={(e) => this.handleOnChangeEditTodo(e)}/></span>
                                        :
                                        <span>{index + 1} - {item.title}</span>

                                    }
                                </>
                                }
                            </div>
                            <div className="btn">

                                <button className="edit" onClick = {()=>this.handleEditTodo(item)}>
                                    {isEmptyObj === false && editTodo.id === item.id ? 'Save' : 'Edit'}
                                </button>
                                <button className="delete" onClick={()=>this.deleteTodo(item)}>Delete</button>
                            </div>
                        </div>
                    )
                })}

            </div>

        </div>;
    }
}

export default Color(TodoListComponent);