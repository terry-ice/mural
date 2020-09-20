/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */

import React from "react";
import * as PIXI from "pixi.js";

const DemoText = (props: any) => {
    const text = new PIXI.Text(props.text);
    text.x = props.x;
    text.y = props.y;
    if (props.stage) {
        props.stage.addChild(text);
    }
    return <div className="DemoText"></div>;
};

export default DemoText;
