import React from 'react';

const Todo = React.createClass({

    render() {
        const {onRemove, value, isDone} = this.props;

        return <div>
            <input value={value} type={'text'} onChange={this.handleTextChange} />
            <button onClick={onRemove}>Remove</button>
            <input checked={isDone} type={'checkbox'} onChange={this.handleDoneChange}/>
            {isDone && <span>I AM COMPLETE</span>}
        </div>
    },

    shouldComponentUpdate(nextProps) {
        console.log(nextProps);
        return (this.props.value !== nextProps.value) || (this.props.isDone !== nextProps.isDone);
    },

    handleTextChange(event) {
        this.props.handleTextChange(event.target.value)
    },

    handleDoneChange(event) {
        console.log(event.target);
        this.props.handleDoneChange(!!event.target.checked)
    }

});
export default Todo;
