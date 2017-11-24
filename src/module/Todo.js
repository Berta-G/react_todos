import React from 'react';

const Todo = React.createClass({

    render() {
        console.log('jai');

        const {onRemove, value} = this.props;

        return <div>
            <input value={value} onChange={this.handleChange} />
            <button onClick={onRemove}>Remove</button>
        </div>
    },

    getInitialState() {
        return {value: this.props.value};
    },

    shouldComponentUpdate(nextProps) {
        return this.props.value !== nextProps.value;
    },

    handleChange(event) {
        this.props.onChange(event.target.value)
    }

});
export default Todo;

