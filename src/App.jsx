import { useState } from "react";
import "./App.css";

function App() {

  const [circles, SetCircles] = useState([]);
  const [deletedCircles, SetDeletedCircles] = useState([]);

  function handelclick(e) {
    if (e.target.nodeName === "BUTTON") return;
    const obj = {
      id: Date.now(),
      x: e.clientX,
      y: e.clientY,
    }

    // push obj in circle 
    SetCircles([...circles, obj]); // circle.push(obj)
  }

  function handleUndo() {
     if(circles.length === 0) return
    let copy = circles;
    const lastInsertedCircle = copy.pop();
    SetDeletedCircles([...deletedCircles, lastInsertedCircle]);
  }

  function handleRedo() {
    if(deletedCircles.length === 0) return
    let copy = deletedCircles;
    const lastDeletedCircle = copy.pop();
    SetCircles([...circles, lastDeletedCircle]);
  }

   // clear Array and screen

  function reset(){
    SetCircles([ ]);
    SetDeletedCircles([ ]);
  }

  console.log("circles" + circles);
  console.log("deleted" + deletedCircles)
  return <>
    <div className="wrapper" onClick={handelclick}>
      <div className="buttons">
        <button onClick={reset}>Reset</button>
        <button onClick={handleUndo}>Undo</button>
        <button onClick={handleRedo}>Redo</button>
      </div>

      {
        
          circles.map((obj) => {
            console.log(obj)
            return (
              <div className="circle" style={{ top: obj.y - 7.5 + "px", left: obj.x - 7.5 + "px" }}></div>
            );
          })
          
      }

    </div>

  </>

}

export default App;


