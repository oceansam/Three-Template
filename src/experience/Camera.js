// Libraries
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import TWEEN from "@tweenjs/tween.js";

// Utils
import Experience from "./Experience";

export default class Camera {
	constructor() {
		this.experience = new Experience();
		this.sizes = this.experience.sizes;
		this.scene = this.experience.scene;
		this.renderer = this.experience.renderer;
		this.monitor = this.scene.getObjectByName("monitorView");
		this.setInstance();
	}
	setInstance() {
		const aspectRatio = this.sizes.width / this.sizes.height;
		const fov = aspectRatio < 0.6 ? 100 : 45;
		this.instance = new THREE.PerspectiveCamera(fov, aspectRatio, 0.1, 5000);

		this.instance.position.copy({ x: 0, y: 0, z: 10 });
	}

	setOrbitControls() {
		this.controls = new OrbitControls(
			this.instance,
			this.experience.renderer.rendererGl.domElement
		);
		this.controls.target = new THREE.Vector3(0, 0, 0);
		this.controls.enableDamping = true;
		this.controls.enableRotate = true;
		this.controls.enableZoom = true;
	}

	resize() {
		this.instance.aspect = this.sizes.width / this.sizes.height;
		this.instance.fov = this.instance.aspect < 0.6 ? 100 : 45;

		this.instance.updateProjectionMatrix();
	}

	update() {
		TWEEN.update();
		this.controls.update();
	}
}
