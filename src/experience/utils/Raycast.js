import * as THREE from "three";
import EventEmitter from "./EventEmitter";
import Experience from "../Experience";

export default class Raycast extends EventEmitter {
	constructor() {
		super();
		this.experience = new Experience();
		this.sizes = this.experience.sizes;
		this.scene = this.experience.scene;
		this.camera = this.experience.camera.instance;
		this.state = this.experience.state;
		this.materials = this.experience.materials;
		// Setup
		this.raycaster = new THREE.Raycaster();
		this.mouse = {};
	}

	playSound() {
		this.hoverSound.play();
	}

	canShowPointer(intersects) {}
}
