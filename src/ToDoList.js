import React from "react";




const ToDoList = (props) =>{

    return (
    <>
    <div className="todo_style">
    <button className="min_but" onClick={()=>{
        props.onSelect(props.id);
    }}> x </button>
    
    <li className="data_li"> {props.data} </li>
    </div>
    </>
    );

}

export default ToDoList;