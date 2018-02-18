import React from 'react';

const App = (props) => {
    props.list.map((item, i) => {
        <li key={i}>{ item }</li>
    });
    
    return  <ul>{ list }</ul>
}

export default App;