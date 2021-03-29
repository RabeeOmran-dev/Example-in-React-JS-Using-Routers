import React from 'react';

export default function NotFound(props){
    return <div>
        <h1>404, Not Found</h1>
        <p>No Match for {props.location.pathname}</p>
    </div>
}