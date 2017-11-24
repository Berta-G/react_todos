import React from 'react';

const Footer = ({onAddTodo}) => {

    return <div>
        <button onClick={onAddTodo}>Add Todo</button>
    </div>
};
export default Footer;

