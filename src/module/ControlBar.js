import React from 'react';

const Footer = ({onAddTodo, onFilterDone}) => {

    return <div>
        <button onClick={onAddTodo}>Add Todo</button>
        <button onClick={onFilterDone}>Filter Done</button>
    </div>
};
export default Footer;

