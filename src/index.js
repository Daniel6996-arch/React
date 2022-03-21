import React from 'react';
import ReactDOM from 'react-dom';

function Upande(props){
  return <h1>This is Upande {props.brand.abbr}</h1>
}

function Ltd(){
  const info = {name:"Limited", abbr:"Ltd"};
  return <>
        <h1>Which company do I work for?</h1>
        <Upande brand={info}/>
  </>
}

ReactDOM.render(<Ltd />, document.getElementById('root'));
