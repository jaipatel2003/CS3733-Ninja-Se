import './App.css';
import React from 'react';
import './App.css';
import { layout } from './Layout.js';

import Model from './Model/Model.js';
import { redrawCanvas } from './Boundary/Boundary.js'
import Ninja from './Model/Model.js'
import { configurationInformation, configurationInformation3 } from './Model/Configuration.js';
import { configurationInformation2 } from './Model/Configuration.js';
//import { moveNinja } from './Controller/Controller.js';

import { Up, Down, Left, Right } from './Model/Model.js';
//import { configurationInformation } from './model/Configuration';
import { moveNinja, pickupkeyss, selectNinja } from './Controller/Controller.js'

function App() {

  var actualBoard = JSON.parse(JSON.stringify(configurationInformation));
  var actualBoard2 = JSON.parse(JSON.stringify(configurationInformation2));
  var actualBoard3 = JSON.parse(JSON.stringify(configurationInformation3));
  const [model, setModel] = React.useState(new Model(actualBoard));
  //const [level, setLevel] = React.useState(actualBoard)
  console.log(model.level)


  const appRef = React.useRef(null);
  const canvasRef = React.useRef(null);

  React.useEffect(() => {
    redrawCanvas(model, canvasRef.current, appRef.current);
  }, [model])


  const handleClick = (e) => {

    
    let newModel = selectNinja(model, canvasRef.current, e)
    setModel(newModel);
  }

  const moveNinjaHandler = (direction) => {
    let newModel = moveNinja(model, direction);
    setModel(newModel);
  }

  const pickupkeyHandler = () => {
    let newModel = pickupkeyss(model);
    setModel(newModel)
  }

  const resetPuzzleHandler = (e) => {
    //let currentLevel = model.level
    //setLevel(currentLevel)
    if(model.level == 1){
      setModel(new Model(actualBoard))
    }
    if(model.level == 2){
      setModel(new Model(actualBoard2))
    }
    if(model.level == 3){
      setModel(new Model(actualBoard3))
    }

  } 

  return (
    <main style={layout.Appmain} ref={appRef}>
      <canvas tabIndex="1"  
        data-testid="canvas"
        className="App-canvas"
        ref={canvasRef}
        width={layout.canvas.width}
        height={layout.canvas.height}
        onClick = {handleClick}
        />

        {/* Using '?' construct is proper React way to make image visible only when victorious. */}  

        <label data-testid="moves-label" style={layout.text}>{"number moves: " + model.numMoves}</label>
        { model.hasWon() ? (<label data-testid="victory-label" style={layout.victory}>Congrats, you won!</label>) : null }

        <div style={layout.buttons}>
           <button data-testid="upbutton" style={layout.upbutton} onClick = {(e) => moveNinjaHandler(Up)} disabled={!model.available(Up)}           >^</button>
           <button data-testid="leftbutton" style={layout.leftbutton} onClick = {(e) => moveNinjaHandler(Left)}  disabled={!model.available(Left)}     >&lt;</button>
           <button data-testid="rightbutton" style={layout.rightbutton} onClick = {(e) => moveNinjaHandler(Right)}  disabled={!model.available(Right)}  >&gt;</button>
           <button data-testid="downbutton" style={layout.downbutton} onClick = {(e) => moveNinjaHandler(Down)}  disabled={!model.available(Down)}   >v</button>
           <button data-testid="pickupkey" style={layout.pickupkey} onClick = {(e) => pickupkeyHandler()} disabled={!model.canpickup()}  >Pick up Key!</button>
           <button data-testid="resetpuzzle" style={layout.resetpuzzle} onClick = {(e) => resetPuzzleHandler()}     >Reset Puzzle!</button>
           <button data-testid="level1" style={layout.level1} onClick = {(e) => setModel(new Model(actualBoard))}   >Level 1</button>
           <button data-testid="level2" style={layout.level2} onClick = {(e) => setModel(new Model(actualBoard2))}     >Level 2</button>
           <button data-testid="level3" style={layout.level3} onClick = {(e) => setModel(new Model(actualBoard3))} >Level 3</button>



        </div>
    </main>
  );
}

export default App;
