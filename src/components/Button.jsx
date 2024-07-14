import React from 'react'

function Button () {
    function handClick () {
        alert("Button clicked!");
    };
    return <button onClick={handClick}>Click me</button>;
};

export default Button;