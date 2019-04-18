// slide show of my pictures at about me section
var index = 1;
function autoShow()
{
	let x = document.getElementsByClassName("slides");
	var i;
	for(i = 0; i < x.length ; i++)
		x[i].style.display="none";
	if(index > x.length) {index = 1 ;}
  x[index-1].style.display = "block";
  index++;
  setTimeout(autoShow,2000);
}
autoShow();

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

/*
document.addEventListener("mouseover",effect);
document.addEventListener("mouseout",effectback);

function effect() 
{
	var y = document.getElementsByClassName("texts");
	y.style.backgroundColor = "lightblue";
}
function effectback()
{
	var z = document.getElementsByClassName("texts");
	z.style.backgroundColor = "#95c8d8";
}*/
// // show more effect in text class 
// var content = document.getElementsByClassName("texts");
// var button2 = document.getElementsByClassName("show-more");

// button2.onclick  = function()
// {
// 	if(content.className = "open")
// 	{
// 		content.className = "close";
// 		button2.innerHTML = "Show Less";
// 	}
// 	else
// 	{
// 		content.className = "open";
// 		button2.innerHTML = "Show More";
// 	}
// }
