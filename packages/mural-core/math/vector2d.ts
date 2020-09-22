/*
 * @Author: terry
 * @Date: 2020-09-22 22:46:05
 * @Last Modified by:   https://github.com/terry-ice
 * @Last Modified time: 2020-09-22 22:46:05
 */

export default class Vector2d {
  x: number;
  y: number;
  z: number;

  constructor(x: number, y: number, z: number) {
    this.x = x;
    this.y = y;
    this.z = z;
  }

  negative() {
    return new Vector2d(-this.x, -this.y, -this.z);
  }

  add(v: Vector2d) {
    if (v instanceof Vector2d) {
      return new Vector2d(this.x + v.x, this.y + v.y, this.z + v.z);
    } else {
      return new Vector2d(this.x + v, this.y + v, this.z + v);
    }
  }

  subtract(v: Vector2d) {
    if (v instanceof Vector2d) return new Vector2d(this.x - v.x, this.y - v.y, this.z - v.z);
    else return new Vector2d(this.x - v, this.y - v, this.z - v);
  }

  multiply(v: Vector2d) {
    if (v instanceof Vector2d) return new Vector2d(this.x * v.x, this.y * v.y, this.z * v.z);
    else return new Vector2d(this.x * v, this.y * v, this.z * v);
  }

  divide(v: Vector2d) {
    if (v instanceof Vector2d) return new Vector2d(this.x / v.x, this.y / v.y, this.z / v.z);
    else return new Vector2d(this.x / v, this.y / v, this.z / v);
  }

  equals(v: Vector2d) {
    return this.x == v.x && this.y == v.y && this.z == v.z;
  }

  dot(v: Vector2d) {
    return this.x * v.x + this.y * v.y + this.z * v.z;
  }

  cross(v: Vector2d) {
    return new Vector2d(
      this.y * v.z - this.z * v.y,
      this.z * v.x - this.x * v.z,
      this.x * v.y - this.y * v.x,
    );
  }

  length() {
    return Math.sqrt(this.dot(this));
  }

  unit() {
    return this.divide(this);
  }

  min() {
    return Math.min(Math.min(this.x, this.y), this.z);
  }

  max() {
    return Math.max(Math.max(this.x, this.y), this.z);
  }

  toAngles() {
    return {
      theta: Math.atan2(this.z, this.x),
      phi: Math.asin(this.y / this.length()),
    };
  }

  angleTo(a: Vector2d) {
    return Math.acos(this.dot(a) / (this.length() * a.length()));
  }

  toArray(n: number) {
    return [this.x, this.y, this.z].slice(0, n || 3);
  }

  clone() {
    return new Vector2d(this.x, this.y, this.z);
  }

  init(x: number, y: number, z: number) {
    this.x = x;
    this.y = y;
    this.z = z;
    return this;
  }

  static negative(a: Vector2d, b: Vector2d) {
    b.x = -a.x;
    b.y = -a.y;
    b.z = -a.z;
    return b;
  }

  static add(a: Vector2d, b: Vector2d, c: Vector2d) {
    if (b instanceof Vector2d) {
      c.x = a.x + b.x;
      c.y = a.y + b.y;
      c.z = a.z + b.z;
    } else {
      c.x = a.x + b;
      c.y = a.y + b;
      c.z = a.z + b;
    }
    return c;
  }

  static subtract(a: Vector2d, b: Vector2d, c: Vector2d) {
    if (b instanceof Vector2d) {
      c.x = a.x - b.x;
      c.y = a.y - b.y;
      c.z = a.z - b.z;
    } else {
      c.x = a.x - b;
      c.y = a.y - b;
      c.z = a.z - b;
    }
    return c;
  }

  static multiply(a: Vector2d, b: Vector2d, c: Vector2d) {
    if (b instanceof Vector2d) {
      c.x = a.x * b.x;
      c.y = a.y * b.y;
      c.z = a.z * b.z;
    } else {
      c.x = a.x * b;
      c.y = a.y * b;
      c.z = a.z * b;
    }
    return c;
  }

  static divide(a: Vector2d, b: Vector2d, c: Vector2d) {
    if (b instanceof Vector2d) {
      c.x = a.x / b.x;
      c.y = a.y / b.y;
      c.z = a.z / b.z;
    } else {
      c.x = a.x / b;
      c.y = a.y / b;
      c.z = a.z / b;
    }
    return c;
  }

  static cross(a: Vector2d, b: Vector2d, c: Vector2d) {
    c.x = a.y * b.z - a.z * b.y;
    c.y = a.z * b.x - a.x * b.z;
    c.z = a.x * b.y - a.y * b.x;
    return c;
  }

  static unit(a: Vector2d, b: Vector2d) {
    var length = a.length();
    b.x = a.x / length;
    b.y = a.y / length;
    b.z = a.z / length;
    return b;
  }

  static fromAngles(theta: number, phi: number) {
    return new Vector2d(
      Math.cos(theta) * Math.cos(phi),
      Math.sin(phi),
      Math.sin(theta) * Math.cos(phi),
    );
  }

  static randomDirection() {
    return Vector2d.fromAngles(Math.random() * Math.PI * 2, Math.asin(Math.random() * 2 - 1));
  }

  static min(a: Vector2d, b: Vector2d) {
    return new Vector2d(Math.min(a.x, b.x), Math.min(a.y, b.y), Math.min(a.z, b.z));
  }

  static max(a: Vector2d, b: Vector2d) {
    return new Vector2d(Math.max(a.x, b.x), Math.max(a.y, b.y), Math.max(a.z, b.z));
  }

  static lerp(a: Vector2d, b: Vector2d, fraction: Vector2d) {
    return b.subtract(a).multiply(fraction).add(a);
  }

  static fromArray(a: Vector2d) {
    return new Vector2d(a[0], a[1], a[2]);
  }

  static angleBetween(a: Vector2d, b: Vector2d) {
    return a.angleTo(b);
  }
}
