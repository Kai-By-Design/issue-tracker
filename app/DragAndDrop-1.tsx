import React from "react";
import "./DragAndDrop.css";

function allowDrop(ev: DragEvent) {
  ev.preventDefault();
}

function drag(ev: DragEvent) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev: DragEvent) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
}

const DragAndDrop = () => {
  return (
    <>
      <div className="hero">
        <div className="title">Next.js Drag and Drop</div>
      </div>
      <div className="container">
        <div className="leftColumn">
          <div className="draggableContainer">
            {/* <div ondragstart={drop(DragEvent)} className="item"  draggable="true" >B</div>
            <div ondragstart={drop(DragEvent)} className="item"  draggable="true" >C</div>
            <div ondragstart={drop(DragEvent)} className="item"  draggable="true" >D</div> */}
            <div className="item" draggable="true">
              B
            </div>
            <div className="item" draggable="true">
              C
            </div>
            <div className="item" draggable="true">
              D
            </div>
          </div>
          <div className="controls">
            <button>New</button>
            <button>Delete</button>
          </div>
        </div>
        <div className="rightColumn">
          <div className="targetContainer">
            {/* <div onDragOver={allowDrop(Event)} className="targetContainer"> */}
            {/* <div ondragstart={drop(Event)} className="item"  draggable="true" >A</div> */}
          </div>
        </div>
        {/* <div>Hello World</div>; */}
      </div>
    </>
  );
};

export default DragAndDrop;
