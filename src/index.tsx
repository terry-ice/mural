import React from 'react';
import ReactDOM from 'react-dom'
import {Stage, Sprite} from '@inlet/react-pixi';

function App() {
    return (
        <Stage width={64} height={64} options={{backgroundColor: 0x000000}} >
            <Sprite image={"./remi.png"} />
        </Stage>
    );
}

ReactDOM.render(<App/>, document.getElementById("root"));
