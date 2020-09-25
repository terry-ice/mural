import vector2d from '../../math/vector2d';
import { PositionPoint } from './position';
import Properties from './properties';

export default class Element {
  protected height: number;
  protected width: number;
  protected id: string;
  protected owner: string;
  protected properties: Properties = new Properties();
  protected position: PositionPoint = new PositionPoint(new vector2d(0, 0));

  constructor(height: number, width: number, id: string, owner: string) {
    this.height = height;
    this.width = width;
    this.owner = owner;
    this.id = id;
  }

  getPosition() {
    return this.position;
  }

  setPosition(point: PositionPoint) {
    this.position = point;
    return this;
  }
}
