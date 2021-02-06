import React from 'react';
import './list.css';


const list= (props) =>{
    const complete = props.complete
    const edit = props.edit
    if(complete === true){
        return(
        <div className="list completed">
            <div className = "item"><p>{props.children}{props.name}</p></div>
            <div ><button className="edit" onClick = {props.Eclick}>edit</button><input type = "checkbox" className = "comp"  onClick = {props.Cclick}/></div>
        </div>
        )
    }else if(edit === true){
        return(
        <div className="list">
            <div className = "item"><p>{props.children}{props.name}</p></div>
            <div ><button className="edit" onClick = {props.Eclick}>edit</button><input type = "checkbox" className = "comp"  onClick = {props.Cclick}/></div>
            <input className="editbox" type = "text" onChange = {props.edittext}/><button className="submit" onClick ={props.editItem}>submit</button>
        </div>
        )
    }else{
    return(
        <div className="list">
            <div className = "item"><p>{props.children}{props.name}</p></div>
            <div ><button className="edit" onClick = {props.Eclick}>edit</button><input type = "checkbox" className = "comp"  onClick = {props.Cclick}/></div>
        </div>
        )
    }
}

export default list;