/*
 * @Author: terry
 * @Date: 2020-09-22 22:46:05
 * @Last Modified by: https://github.com/terry-ice
 * @Last Modified time: 2020-09-23 12:04:13
 */

export default class Vector2d {
  x: number;
  y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  negative() {
    this.x = -this.x;
    this.y = -this.y;
    return this;
  }

  add(v: Vector2d) {
    if (v instanceof Vector2d) {
      this.x += v.x;
      this.y += v.y;
    } else {
      this.x += v;
      this.y += v;
    }
    return this;
  }

  subtract(v: Vector2d) {
    if (v instanceof Vector2d) {
      this.x -= v.x;
      this.y -= v.y;
    } else {
      this.x -= v;
      this.y -= v;
    }
    return this;
  }

  multiply(v: Vector2d) {
    if (v instanceof Vector2d) {
      this.x *= v.x;
      this.y *= v.y;
    } else {
      this.x *= v;
      this.y *= v;
    }
    return this;
  }

  divide(v: Vector2d) {
    if (v instanceof Vector2d) {
      if (v.x != 0) this.x /= v.x;
      if (v.y != 0) this.y /= v.y;
    } else {
      if (v != 0) {
        this.x /= v;
        this.y /= v;
      }
    }
    return this;
  }

  equals(v: Vector2d) {
    return this.x == v.x && this.y == v.y;
  }

  dot(v: Vector2d) {
    return this.x * v.x + this.y * v.y;
  }

  cross(v: Vector2d) {
    return this.x * v.y - this.y * v.x;
  }

  length() {
    return Math.sqrt(this.dot(this));
  }

  normalize() {
    return this.divide(this);
  }

  min() {
    return Math.min(this.x, this.y);
  }

  max() {
    return Math.max(this.x, this.y);
  }

  toAngles() {
    return -Math.atan2(-this.y, this.x);
  }

  angleTo(a: Vector2d) {
    return Math.acos(this.dot(a) / (this.length() * a.length()));
  }

  toArray(n: number) {
    return [this.x, this.y].slice(0, n || 2);
  }

  clone() {
    return new Vector2d(this.x, this.y);
  }

  set(x: number, y: number) {
    this.x = x;
    this.y = y;
    return this;
  }

  static negative(v: Vector2d) {
    return new Vector2d(-v.x, -v.y);
  }

  static add(a: Vector2d, b: Vector2d) {
    if (b instanceof Vector2d) return new Vector2d(a.x + b.x, a.y + b.y);
    else return new Vector2d(a.x + b, a.y + b);
  }

  static subtract(a: Vector2d, b: Vector2d) {
    if (b instanceof Vector2d) return new Vector2d(a.x - b.x, a.y - b.y);
    else return new Vector2d(a.x - b, a.y - b);
  }

  static multiply(a: Vector2d, b: Vector2d) {
    if (b instanceof Vector2d) return new Vector2d(a.x * b.x, a.y * b.y);
    else return new Vector2d(a.x * b, a.y * b);
  }

  static divide(a: Vector2d, b: Vector2d) {
    if (b instanceof Vector2d) return new Vector2d(a.x / b.x, a.y / b.y);
    else return new Vector2d(a.x / b, a.y / b);
  }

  static equals(a: Vector2d, b: Vector2d) {
    return a.x == b.x && a.y == b.y;
  }

  static dot(a: Vector2d, b: Vector2d) {
    return a.x * b.x + a.y * b.y;
  }

  static cross(a: Vector2d, b: Vector2d) {
    return a.x * b.y - a.y * b.x;
  }
}
