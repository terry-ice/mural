/*
 * @Author: terry
 * @Date: 2020-09-22 22:48:58
 * @Last Modified by: https://github.com/terry-ice
 * @Last Modified time: 2020-09-22 22:56:11
 */

import React, { useEffect, useRef } from 'react';
import PixiCanvas from '../packages/mural-core/pixi/canvas';

const pixi = new PixiCanvas();

const Scene = () => {
  const inputEl = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    inputEl.current!.appendChild(pixi.getView());
  }, []);

  return <div ref={inputEl} />;
};

export default Scene;
