// search effect
function myFunction(){
	var input = document.getElementById("search-bar");
	var filter = input.value.toUpperCase();
	var contents = document.getElementById("text-content");
	var texts = document.getElementsByTagName("p");
	for (i = 0 ; i < texts.length ; i++)
	{
		var txtValue = texts[i].textContent || texts[i].innerText;
		if (txtValue.toUpperCase().indexOf(filter) > -1) {
			texts[i].style.display = "";
	} else {
			texts[i].style.display = "none";
	}
	}
}