"use strict";

let shareblock = document.querySelector('.share-block');
let btnShare = document.querySelector('.right-btn-share');

let i = 1;

btnShare.addEventListener('click', function(){
	if(i == 1) {
		shareblock.classList.remove('hidden');
		btnShare.classList.add('margin');
		i = 2;
	} else {
		shareblock.classList.add('hidden');
		btnShare.classList.remove('margin');
		i = 1;
	}
});