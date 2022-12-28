import * as THREE from "three";
import Experience from "./experience/Experience";

export default class Renderer {
	constructor() {
		this.experience = new Experience();
		this.canvas = this.experience.canvas;
		this.sizes = this.experience.sizes;
		this.scene = this.experience.scene;
		this.cssScene = this.experience.cssScene;
		this.camera = this.experience.camera;
		this.setInstance();
	}

	setInstance() {
		this.rendererGl = new THREE.WebGLRenderer({ alpha: true });
		this.rendererGl.setSize(window.innerWidth, window.innerHeight);
		this.rendererGl.setClearColor(0x000000, 0.0);
		this.rendererGl.shadowMap.enabled = true;
		this.rendererGl.shadowMap.type = THREE.PCFSoftShadowMap; // default THREE.PCFShadowMap
		this.rendererGl.outputEncoding = THREE.sRGBEncoding;

		document.querySelector("#webgl").appendChild(this.rendererGl.domElement);
	}

	resize() {
		this.rendererGl.setSize(this.sizes.width, this.sizes.height);
		this.rendererGl.setPixelRatio(this.sizes.pixelRatio);
	}
	update() {
		this.rendererGl.render(this.scene, this.camera.instance);
	}
}
