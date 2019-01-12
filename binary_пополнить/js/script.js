var drop_state = new Boolean (true);

window.onload = () => resizeMain ();
window.onresize = () => resizeMain ();

function resizeMain ()
{
	var height = window.innerHeight;
	document.querySelector("aside").style.height = height + 'px';
	height = height - 70;
	document.querySelector("main").style.height = height + 'px';
}

document.querySelector("#menu_button").onclick = function ()
{

}

document.querySelector(".drop_menu").onclick = function ()
{
	if (drop_state)
	{
		document.querySelector(".drop_menu_content").style.animationName = 'DropMenu';
		document.querySelector(".drop_menu").style.color = "#131823";
		setTimeout(() => document.querySelector(".drop_menu_content").style.display = 'block', 1000);
	}
	else
	{
		document.querySelector(".drop_menu_content").style.animationName = 'BackDropMenu';
		document.querySelector(".drop_menu").style.color = 'inherit';
		setTimeout(() => document.querySelector(".drop_menu_content").style.display = 'none', 1000);
	}

	drop_state ? drop_state = false : drop_state = true;
}