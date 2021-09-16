import React, { Component } from 'react';
import { toast } from 'react-toastify'

class AddTodoComponent extends React.Component {
    documentData;

    state = {
        title: '',
    }

    handleOnChangeTitle = (e) => {
        this.setState({
            title: e.target.value
        })
    }

    handleAddTodo = () => {

        if (!this.state.title) {
            toast.error('Fail')
            return
        }
        let todo = {
            id: Math.floor(Math.random() * 1000),
            title: this.state.title
        }
        this.props.addNewTodo(todo)



        this.setState({
            title: ''
        })

        // localStorage.setItem('id', todo.id)
        // localStorage.setItem('title', todo.id ? todo.title : '')
        localStorage.setItem('document', JSON.stringify(todo));

    }

    


    render() {
        let { title } = this.state
        return <div className="add-todo">
            <input value={title} type="text" onChange={(e) => this.handleOnChangeTitle(e)} />
            <button className="add" onClick={() => this.handleAddTodo()}>Add</button>

        </div>;
    }
}

export default AddTodoComponent;