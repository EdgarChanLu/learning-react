import React from 'react';

function Greeting (props) {
    return <h1>Hello { [props.name, ' ', props.lastName] } </h1>
}

export default Greeting;