var somophore = new Boolean (true);

window.onload = () => resizeMain ();
window.onresize = () => resizeMain ();

function resizeMain (){
	var height = window.innerHeight - 70;
	document.querySelector("main").style.height = height + 'px';
}

document.querySelector("#drop_menu_currency").onclick = function ()
{
	if (somophore) {
		document.querySelector("#currency_drop_menu").style.display = 'flex';
		document.querySelector("#currency_drop_menu").style.animationName = 'DropMenu';
		document.querySelector("#currency_img").style.transform = 'rotate(180deg)';
	}
	else {
		document.querySelector("#currency_drop_menu").style.animationName = 'BackDropMenu';
		document.querySelector("#currency_img").style.transform = 'rotate(0deg)';
		setTimeout(() => document.querySelector("#currency_drop_menu").style.display = 'none', 1500);
	}

	somophore ? somophore = false : somophore = true;
}