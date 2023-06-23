//your code here
const main = document.getElementById("app");
const button = document.getElementById("swap");
function swapTheme() {
	if(main.className === "day"){
		main.className = "night";
		button.className = "button_night";
	}	
	else{
		main.className = "day";
		button.className = "button_day";
	}
}
