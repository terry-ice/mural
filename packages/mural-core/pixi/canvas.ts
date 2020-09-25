/*
 * @Author: terry
 * @Date: 2020-09-22 22:47:23
 * @Last Modified by: https://github.com/terry-ice
 * @Last Modified time: 2020-09-23 14:09:09
 */

import * as PIXI from 'pixi.js';

export default class PixiCanvas {
  app: PIXI.Application;
  graphics: PIXI.Graphics;

  constructor() {
    this.app = new PIXI.Application({ antialias: true });
    this.graphics = new PIXI.Graphics();
    this.graphics.lineStyle(2, 0xff00ff, 1);
    this.graphics.beginFill(0x650a5a, 0.25);
    this.graphics.drawRoundedRect(50, 240, 200, 100, 16);
    this.graphics.endFill();
    this.app.stage.addChild(this.graphics);
  }



  getView(): HTMLCanvasElement {
    return this.app.view;
  }

}
