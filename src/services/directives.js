import Vue from 'vue';
import { EventBus } from '@/services/event-bus.js';

export const list = {
	inserted: function(el, binding) {
		const children = el.children;
		function check() {
			for(let i=0; i<children.length; i++){
				let elementTop = children[i].offsetTop;
				if(i>0){
					let previousTop = children[i-1].offsetTop;
					if(elementTop>previousTop)
						children[i].classList.add('first-of-line');
					else
						children[i].classList.remove('first-of-line');
				}
			}
		}
		setInterval(check, 500);
	}
};
export const scrollTo = {
	inserted: function(el, binding) {
		if(binding.value){
			let target = document.getElementById(binding.value);

			if( target ){

				el.classList.add('link');

				el.addEventListener('click', function(){

					let offset = target.getBoundingClientRect();
					window.scrollTo({
						top: offset.top,
						behavior: 'smooth'
					})
				})
			}

		}
	}
};

export const follow = {
	inserted: function(el, binding) {

		const trace = (a, b, n) => {
			return (1 - n) * a + n * b;
		};

		const render = () => {
			x = trace(x, mouseX, timing);
			y = trace(y, mouseY, timing);

			elementBoundingClientRect= el.getBoundingClientRect();

			el.style.transform  = 'translate('+(x-(elementBoundingClientRect.width/2))+'px,'+(y-(elementBoundingClientRect.height/2))+'px)';
			requestAnimationFrame(render);
		};

		let timing = 0.1;

		let x = 0;
		let y = 0;

		let mouseX = 0;
		let mouseY = 0;

		let elementBoundingClientRect= el.getBoundingClientRect();

		document.body.addEventListener('mousemove', function (e) {
			mouseX = e.clientX;
			mouseY = e.clientY;
		});

		el.style.top = 0;
		el.style.left = 0;
		el.style.position = 'fixed';

		EventBus.$on('under-cursor', function(action){
			if( action )
				el.setAttribute('data-action', action);
			else
				el.removeAttribute('data-action');
		});

		requestAnimationFrame(render)
	}
};

export const clip = {
	inserted: function(el, binding) {

		const trace = (a, b, n) => {
			let m = (1 - n) * a + n * b;
			return m<0.1?0:m
		};

		const render = () => {

			interpolatedX = trace(interpolatedX, mouseX, timing);
			interpolatedY = trace(interpolatedY, mouseY, timing);
			interpolatedSize = trace(interpolatedSize, size, timing);

			if( interpolatedX >= grandParentBoundingClientRect.x*tolerance && interpolatedX <= grandParentBoundingClientRect.x/tolerance+grandParentBoundingClientRect.width && interpolatedY >= grandParentBoundingClientRect.y*tolerance && interpolatedY <= grandParentBoundingClientRect.y/tolerance+grandParentBoundingClientRect.height )
			{

				el.style.clipPath  = 'circle('+interpolatedSize+'px at '+(interpolatedX-elementBoundingClientRect.x)+'px '+(interpolatedY-elementBoundingClientRect.y)+'px)';
			}

			requestAnimationFrame(render);
		};

		const update = (e) => {

			mouseX = e.clientX;
			mouseY = e.clientY;

			elementBoundingClientRect= el.getBoundingClientRect();
			parentBoundingClientRect= el.parentNode.getBoundingClientRect();
			grandParentBoundingClientRect= el.parentNode.parentNode.parentNode.getBoundingClientRect();

			if( interpolatedX <= parentBoundingClientRect.x || interpolatedX >= parentBoundingClientRect.x+parentBoundingClientRect.width || interpolatedY <= grandParentBoundingClientRect.y || interpolatedY >= grandParentBoundingClientRect.y+grandParentBoundingClientRect.height ){
				size= 0;
			}
			else{
				size = 110;
			}
		};

		let interpolatedX = 0;
		let interpolatedY = 0;
		let interpolatedSize = 50;
		let timing = 0.1;

		let size = 0;
		let tolerance = 0.7;

		let mouseX = 0;
		let mouseY = 0;

		let elementBoundingClientRect= el.getBoundingClientRect();
		let parentBoundingClientRect= el.parentNode.getBoundingClientRect();
		let grandParentBoundingClientRect= el.parentNode.parentNode.getBoundingClientRect();

		el.style.clipPath  = 'circle(0px at 0px 0px)';

		document.body.addEventListener('mousemove', update);

		requestAnimationFrame(render)
	}
};