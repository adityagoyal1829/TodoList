import React, { useState } from "react"
import "./App.css"
import ToDoList from "./ToDoList";


const App = () => {

  const [inlist,setinlist] = useState("");
  const [item,setitem] = useState([]);


  const itemEvent = (event) => {
      setinlist(event.target.value);
  }

  const update = () => {
      setitem((olditem)=>{
          return (
            [...olditem,inlist]
          );
      });

      setinlist("");
  }

  const delupdate = (id) =>{
      setitem((olditem) =>{
        return (
          olditem.filter((arrEle,index)=> {
              return index !== id;
          })
        ) 
      });
  }

  return (
    <>
      <div className="main_div">
          <div className="center_div">
              <br/>
              <h1>ToDo List</h1>
              <br/>
              <input type="text" placeholder="Add a Item"  onChange={itemEvent} value={inlist} />
              <button onClick={update}> + </button>

              <ol>
                  
                  {item.map((curVal,index,item) => {
                    return ( <> <ToDoList key={index} id={index} data={curVal} onSelect={delupdate} /> </> );
                  })}

              </ol>
          </div>
      </div>
    </>
  );

}


export default App;