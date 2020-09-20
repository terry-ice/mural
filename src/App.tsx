import React, { Component } from "react";
import TextDemo from "./components/TextDemo";
import PixiView from "../packages/mural-model/PixiHome";

class GameScene extends Component {
    state: any = {
        stage: null,
        engine: null,
    };
    componentDidMount() {
        const engine = new PixiView(800, 600, "#GameCanvas", { backgroundColor: 0x1099bb });
        this.setState({
            stage: engine,
            engine,
        });
    }
    render() {
        return (
            <div className="GameScene">
                <div id="GameCanvas">
                    <TextDemo text="Basic Pixi Text in React" x={30} y={90} stage={this.state.stage} />
                </div>
            </div>
        );
    }
}

export default GameScene;
