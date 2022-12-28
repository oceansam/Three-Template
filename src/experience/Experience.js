// Libraries
import * as THREE from "three";

// Utils
import Sizes from "./utils/Sizes";
import Time from "./utils/Time";
import State from "./utils/State";
import Raycast from "./utils/Raycast";
import Resources from "./utils/Resources";
import Camera from "./Camera";
import Renderer from "../Renderer";
import World from "./world/World";
import Materials from "./world/Materials";

// Data
import sources from "./sources";

// Styles
import "../style.css";

let instance = null;

export default class Experience {
	constructor(canvas) {
		// Singleton
		if (instance) return instance;

		instance = this;
		// Setup
		this.sizes = new Sizes();
		this.time = new Time();
		this.scene = new THREE.Scene();
		this.cssScene = new THREE.Scene();
		this.resources = new Resources(sources);
		this.camera = new Camera();
		this.renderer = new Renderer();
		this.camera.setOrbitControls();
		this.world = new World();
		this.materials = new Materials();
		this.state = new State();
		this.raycast = new Raycast(this.camera);

		// Sizes change event
		this.sizes.on("resize", () => {
			this.resize();
		});

		// Time delta tick event
		this.time.on("tick", () => {
			this.update();
		});
	}

	/**
	 * Resize the experience viewport and propogate to child
	 */
	resize() {
		this.camera.resize();
		this.renderer.resize();
	}

	updateState(state) {
		this.state.setState(state);
	}
	/**
	 * Update the animation
	 */
	update() {
		this.camera.update();
		this.renderer.update();
	}
}
