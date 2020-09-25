import vector2d from '../../math/vector2d';

export class PositionPoint {
  protected position: vector2d;

  constructor(point: vector2d) {
    this.position = point;
  }

  getPosition() {
    return this.position;
  }

  setPosition(point: vector2d) {
    this.position = point;
    return this;
  }
}
