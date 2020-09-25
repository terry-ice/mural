/*
 * @Author: terry
 * @Date: 2020-09-22 22:56:46
 * @Last Modified by:   https://github.com/terry-ice
 * @Last Modified time: 2020-09-22 22:56:46
 */

import * as PIXI from 'pixi.js';
import vector2d from '../math/vector2d';

export default class Rect {
  graphics: PIXI.Graphics;
  className = 'PixiArc';

  constructor(vector: vector2d, width: number, height: number) {
    this.graphics = new PIXI.Graphics();
    this.graphics.beginFill(0xde3249);
    this.graphics.drawRect(vector.x, vector.y, width, height);
    this.graphics.endFill();
  }
}
