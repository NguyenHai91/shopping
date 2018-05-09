window.addEventListener('DOMContentLoaded', function(event){
	function dropdown(dropdownId)
	{
		var dropdown = document.getElementById(dropdownId);
		var btn = dropdown.querySelector('.btn');
		var listOptions = dropdown.querySelectorAll('li');
		
		listOptions.forEach(function(ele){
			ele.addEventListener("click", function(event){
				listOptions.forEach(function(ele){
					ele.classList.remove("selected");
				});
				ele.classList.add("selected");
				btn.innerHTML = ele.textContent + '<span class="angle"><i class="fa fa-angle-down" aria-hidden="true"></i></span>';
			});
		});
	}
	dropdown("dropdown-size");
	dropdown("dropdown-quantity");
});