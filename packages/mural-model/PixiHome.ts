import * as PIXI from 'pixi.js';

class PIXIRender {
  app: PIXI.Application;

	constructor(width?: number, height?: number, targetEl?: string, option?: any) {
		// Initial context binds
		this.animate = this.animate.bind(this);
		this.loadSprites = this.loadSprites.bind(this);

		// Build the initial renderer context
		this.app.renderer = PIXI.autoDetectRenderer({ width, height });

		// Gross, but apparently necessary
		document.querySelector(targetEl).appendChild(this.app.renderer.view);

		// create the root of the scene graph
		this.app.stage = new PIXI.Container();

		// Render to the stage
		this.app.renderer.render(this.app.stage);

		// Call the main animation loop
		this.animate();
	}
	loadSprites(sprites: any) {
		// Load any sprites into the texture cache
		// PIXI.loader.add(sprites).load(this.setup);
	}
	setup() {
		// Do a thing?
	}
	animate() {
		requestAnimationFrame(this.animate);
		if (this.app.renderer) {
			this.app.renderer.render(this.app.stage);
		}
	}
}

export default PIXIRender;
