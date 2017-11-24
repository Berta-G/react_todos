import React from 'react';
import Todo from './module/Todo';
import ControlBar from './module/ControlBar';

//use this component as it was the entry point of your dev server

const Root = React.createClass({

    getInitialState() {
        return {todos: ['my first todo']};
    },

    render() {
        return <div>
            <ControlBar step={1} onAddTodo={this._addTodo} onChange={this._applyOffsetAll} />
            {
                this.state.todos.map((v, i) => <Todo key={i} step={1} value={v} onRemove={this._onRemoveTodo(i)} onChange={this._applyOffset(i)}/>)
            }
        </div>
    },

    _onRemoveTodo(itemToRemove) {
        return () => {
            this.setState({
                todos: this.state.todos.filter((Todo, k) => k !== itemToRemove)
            })
        }
    },

    _addTodo() {
        this.setState({todos:[...this.state.todos, '']});
    },

    _applyOffset(index) {
        return (text) => {
            let newTodos = this.state.todos.slice();
            newTodos[index] = text;
            this.setState({todos: newTodos});
        };
    },

    _applyOffsetAll(inc) {
        let newTodos = this.state.todos.slice();
        newTodos = newTodos.map(v => v + inc);
        this.setState({todos: newTodos});
    }

});

export default Root;
