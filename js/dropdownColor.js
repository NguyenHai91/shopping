window.addEventListener('DOMContentLoaded', function(){
	var dropdownColor = document.getElementById('dropdown-color');
	var btn = dropdownColor.querySelector('.btn');
	var itemChoosed = dropdownColor.querySelector('.item-choosed');
	var dropMenu = dropdownColor.querySelector('.dropdown-menu');
	var arrLi = dropMenu.querySelectorAll('li');

	arrLi.forEach( function(element, index) {
		element.addEventListener('click', function(){
			let item = element.querySelector('.item');
			
			itemChoosed.innerHTML = '';
			itemChoosed.innerHTML = item.innerHTML + '<span class="angle"><i class="fa fa-angle-down" aria-hidden="true"></i></span>';
			
		});
	});
});