import React from 'react';
import Todo from './module/Todo';
import ControlBar from './module/ControlBar';

//use this component as it was the entry point of your dev server

const MAX_LENGTH = 10;

const Root = React.createClass({

    getInitialState() {
        return {todos: [], isFiltering: false};
    },

    render() {

        const todos = this.state.todos
            .filter(this.filterOutDoneTodos)
            .map((todo) => (
                <Todo key={todo.id}
                    value={todo.text}
                    isDone={todo.done}
                    onRemove={this._onRemoveTodo(todo.id)}
                    handleTextChange={this._handleTextChange(todo.id)}
                    handleDoneChange={this._handleDoneChange(todo.id)}/>
            ));

        return <div>
            <ControlBar onAddTodo={this._addTodo} onFilterDone={this._filterDone}/>
            {todos}
        </div>
    },

    filterOutDoneTodos(todo) {
        if (this.state.isFiltering) {
            return !todo.done;
        }
        return true;
    },

    _onRemoveTodo(itemToRemove) {
        return () => {
            this.setState({
                todos: this.state.todos.filter((Todo, k) => k !== itemToRemove)
            })
        }
    },

    _createTodo() {
        return {
            id: new Date().getTime(),
            text: '',
            done: false
        }
    },

    _addTodo() {
        this.setState({todos:[...this.state.todos, this._createTodo()]});
    },

    _filterDone() {
        this.setState({isFiltering: !this.state.isFiltering});
    },

    _handleTextChange(id) {
        return (text) => {
            if (text.length <= MAX_LENGTH) {
                let newTodos = this.state.todos.slice();
                newTodos.forEach((todo) => {
                    if (todo.id === id) todo.text = text;
                });
                this.setState({todos: newTodos});
            }
        };
    },

    _handleDoneChange(id) {
        return (value) => {
            let newTodos = this.state.todos.slice();
            newTodos.forEach((todo) => {
                if (todo.id === id) todo.done = value;
            });
            this.setState({todos: newTodos});
        }
    }

});

export default Root;
