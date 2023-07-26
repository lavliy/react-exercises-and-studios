import data from './../data.json';
import { useState } from 'react';

function MyProjects(){
    const [index, setIndex] = useState(0);
    const listVariable = data.Projects;
    const itemVariable = listVariable[index];

    function handleClick() {
        if (index < data.Projects.length-1)
        {
           setIndex(index + 1);
        }
        else 
        {
           setIndex(0);
        }
     }

     return (
        <div>
            <button onClick={handleClick}>Next</button>
            <h2>{itemVariable.name}</h2>
            <h3>{itemVariable.source}</h3>
            <img src = {itemVariable.photoUrl} alt = {itemVariable.photoUrl}/>
        </div>
     )

}

export default MyProjects;