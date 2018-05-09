window.addEventListener('DOMContentLoaded', function(){
	var boxImg = document.getElementById('box-img');
	var listImg = boxImg.querySelectorAll('.list-img');
	var arrImg = listImg[0].querySelectorAll('.thumb-img');
	var mainImg = boxImg.querySelector('.main-img');
	
	var selectedIndex = 0;
	
	arrImg.forEach( function(element, index) {
		element.addEventListener('click', function () {
			mainImg.src = element.src;
			selectedIndex = index;
			console.log(selectedIndex);
		});
	});
	//overlay
	var overlay = document.getElementById('overlay');
	var imgOverlay = overlay.querySelector('.img-overlay');
	var btnLeft = overlay.querySelector('.previous-btn');
	var btnRight = overlay.querySelector('.next-btn');
	var btnClose = overlay.querySelector('.close-btn');

	mainImg.addEventListener('click', function(){
		imgOverlay.src = mainImg.src; //load image when start
		overlay.style.display = 'block';
	});
	
	btnClose.addEventListener('click', function(){
		overlay.style.display = 'none';
	});
	btnLeft.addEventListener('click', function(){
		selectedIndex--;
		if (selectedIndex >= arrImg.length) {
			selectedIndex = 0;

		} else if (selectedIndex <= 0) {
			selectedIndex = arrImg.length -1;
		}
		imgOverlay.src = arrImg[selectedIndex].src;
	});
	btnRight.addEventListener('click', function(){
		selectedIndex++;
		if (selectedIndex >= arrImg.length) {
			selectedIndex = 0;

		} else if (selectedIndex <= 0) {
			selectedIndex = arrImg.length -1;
		}
		imgOverlay.src = arrImg[selectedIndex].src;
	});
});