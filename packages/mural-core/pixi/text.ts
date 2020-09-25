/*
 * @Author: terry
 * @Date: 2020-09-22 22:56:46
 * @Last Modified by:   https://github.com/terry-ice
 * @Last Modified time: 2020-09-22 22:56:46
 */

import * as PIXI from 'pixi.js';

export default class PixiArc {
  graphics: PIXI.Graphics;
  className = 'PixiArc';

  constructor() {
    this.graphics = new PIXI.Graphics();
    this.graphics.beginFill(0xde3249);
    this.graphics.drawRect(50, 50, 120, 100);
    this.graphics.endFill();
  }
}
