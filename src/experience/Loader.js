import EventEmitter from "./utils/EventEmitter";
import { gsap } from "gsap";
export default class Loader extends EventEmitter {
	constructor(sources) {
		super();

		this.lastProgress = 0;

		// Progressive Loader
		this.loadContainer = document.querySelector(".loading-screen");
		this.loadProgress = document.querySelector(".load-progress");
		this.loadBar = document.querySelector(".load-bar");
	}

	updateProgress(value) {
		const roundVal = Math.round(value);
		this.loadBar.style.transform = `scaleX(${value / 100})`;
		this.loadProgress.textContent = roundVal;
	}

	removeLoader() {
		gsap.to(this.loadContainer, {
			opacity: 0,
			duration: 1,
			onComplete: () => {
				this.loadContainer.style.display = "none";
			},
		});
	}
}
