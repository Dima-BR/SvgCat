var buttons=document.querySelectorAll(".btns button");
var cat =document.getElementsByClassName("cat")[0];

for(i=0;i<buttons.length;i++){
	buttons[i].addEventListener("click", manageCatClasses);
}

function manageCatClasses() {
	// alert("Testing I'm Working ");
	if(this.getAttribute("data-add")){
		cat.classList.add(this.getAttribute("data-add"));
	}

	if(this.getAttribute("data-remove")){
		cat.classList.remove(this.getAttribute("data-remove"));
	}
}