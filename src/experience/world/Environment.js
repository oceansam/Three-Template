import * as THREE from "three";

import Experience from "../Experience";
const SCREEN_SIZE = { w: 2080, h: 1080 };

export default class Environment {
	constructor() {
		this.experience = new Experience();
		this.scene = this.experience.scene;
		this.camera = this.experience.camera.instance;
		this.cssScene = this.experience.cssScene;
		this.resources = this.experience.resources;
		this.materials = this.experience.materials;
		this.screenSize = new THREE.Vector2(SCREEN_SIZE.w, SCREEN_SIZE.h);
		this.resource = this.resources.items.RoomModel;

		this.setEnvironmentModel();
		this.setEnvironmentMaterial();
	}
	/**
	 * Load and store model data
	 */
	setEnvironmentModel() {
		// Base model
		this.cube = new THREE.Mesh(
			new THREE.BoxGeometry(1, 1, 1),
			new THREE.MeshBasicMaterial({ color: 0xff0000 })
		);
		this.cube.position.set(0, 0, 0);
	}

	/**
	 * Set model material
	 */
	setEnvironmentMaterial() {
		this.resources.on("texturesReady", () => {
			console.log("%cSetting Materials", "color: #bada55");

			this.scene.add(this.cube);
			this.setIdleAnimations();
		});
	}

	setIdleAnimations() {}
}
