// import { useState, useEffect } from "react";
// import "./App.css";

// function App() {
//   const [array, setArray] = useState([]); 
//   const [Redo, setRedo] = useState([]); 
//   const [btn, setBtn] = useState(true); // 

//   const handleClick = (e) => {
//     const obj = {
//       id: Date.now(),
//       x: e.clientX,
//       y: e.clientY,
//     };
//     setArray([...array, obj]);
//     setRedo([]); 
//   };

//   const handleReset = (e) => {
//     e.stopPropagation(); 
//     setArray([]);
//     setRedo([]);
//   };

//   const handleUndo = (e) => {
//     e.stopPropagation();
//     if (array.length === 0) return;
//     const newArray = [...array];
//     const last = newArray.pop();
//     setArray(newArray);
//     setRedo([...Redo, last]);
//   };

//   const handleRedo = (e) => {
//     e.stopPropagation();
//     if (Redo.length === 0) return;
//     const newRedo = [...Redo];
//     const last = newRedo.pop();
//     setRedo(newRedo);
//     setArray([...array, last]);
//   };

//   useEffect(() => {
//     setBtn(array.length === 0); 
//   }, [array]);

//   return (
//     <>
//       <div id="wrapper" onClick={handleClick}>
//         <div id="buttons">
//           <button onClick={handleReset} disabled={btn}>
//             Reset
//           </button>
//           <button onClick={handleUndo} disabled={btn}>
//             Undo
//           </button>
//           <button onClick={handleRedo} disabled={Redo.length === 0}>
//             Redo
//           </button>
//         </div>


//         {array.map((item) => (
//           <div
//             key={item.id}
//             className="circle"
//             style={{
//               top: item.y - 10 ,
//               left: item.x - 10 ,

//             }}
//           ></div>
//         ))}
//       </div>
//     </>
//   );
// }

// export default App;




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
    let copy = circles;
    const lastInsertedCircle = copy.pop();
    SetDeletedCircles([...deletedCircles, lastInsertedCircle]);
  }

  function handleRedo() {
    let copy = circles;
    const lastDeletedCircle = copy.pop();
    SetCircles([...circles, lastDeletedCircle]);
  }

  console.log("circles" + circles);
  console.log("deleted" + deletedCircles)
  return <>
    <div className="wrapper" onClick={handelclick}>
      <div className="buttons">
        <button>Reset</button>
        <button onClick={handleUndo}>Undo</button>
        <button onClick={handleRedo}>Redo</button>
      </div>

      {
        circles.length > 0 ?
          circles.map((obj) => {
            return (
              <div className="circle" style={{ top: obj.y - 7.5 + "px", left: obj.x - 7.5 + "px" }}></div>
            );
          })
          : ""
      }

    </div>

  </>

}

export default App;