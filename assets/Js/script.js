


function openMenue() {
	document.getElementById("mySidebar").style.width = "50vw";
	document.getElementById("main").style.marginRight = "50vw";
	document.getElementById("openbtn").style.right = "50vw";
}

function closeMenue() {
	      document.getElementById("mySidebar").style.width = "0";
		  document.getElementById("main").style.marginLeft = "0";
		  document.getElementById("openbtn").style.right= "0";
}


function technical(){
	document.getElementById("content").style.display = "none";
	document.getElementById("marketing").style.display = "none";
	document.getElementById("finance").style.display = "none";
	document.getElementById("management").style.display = "none";
	document.getElementById("fani").style.display = "block";
}

function marketing(){
	document.getElementById("content").style.display = "none";
	document.getElementById("finance").style.display = "none";
	document.getElementById("management").style.display = "none";
	document.getElementById("fani").style.display = "none";
	document.getElementById("marketing").style.display = "block";
}
function finance(){
	document.getElementById("content").style.display = "none";
	document.getElementById("management").style.display = "none";
	document.getElementById("fani").style.display = "none";
	document.getElementById("marketing").style.display = "none";
	document.getElementById("finance").style.display = "block";
}
function management(){
	document.getElementById("content").style.display = "none";
	document.getElementById("fani").style.display = "none";
	document.getElementById("marketing").style.display = "none";
	document.getElementById("finance").style.display = "none";
	document.getElementById("management").style.display = "block";
}
function content(){
	document.getElementById("fani").style.display = "none";
	document.getElementById("marketing").style.display = "none";
	document.getElementById("finance").style.display = "none";
	document.getElementById("management").style.display = "none";
	document.getElementById("content").style.display = "block";
}