import React from 'react';
import './list.css';


const list= (props) =>{
    const complete = props.complete
    const edit = props.edit
    
    return(
        <div className={complete===true?"list completed":"list"}>
            <div className = "item"><p>{props.children}{props.name}</p></div>
            <div ><button className="edit" onClick = {props.Eclick}>edit</button><input type = "checkbox" className = "comp"  onClick = {props.Cclick}/></div>
            <input className={edit===true?"editbox":"disable"} type = "text" onChange = {props.edittext}/><button className={edit===true?"submit":"disable"} onClick ={props.editItem}>submit</button>
        </div>
    )
}


export default list;