
var body=document.body;
var toggle_bottom=document.getElementById("bottom")
var toggle_mode_anchor=document.getElementById("toggle_mode_anchor")
var toggle_img=document.getElementById("toggle_img")
var toggle_mode_caption=document.getElementById("toggle_mode_caption")
var black_background=document.getElementById("black_background")
var feedback_popup=document.getElementById("feedback_popup")

function toggle_black(){
    body.style.background="radial-gradient(circle,#111111,#1a1b1be1,#1b1c1f)";
    body.style.color="white";
    toggle_bottom.style.backgroundColor="#656d65";
    toggle_img.src="img/sun.png";
    toggle_mode_caption.textContent="Light-Mode";
    toggle_mode_anchor.onclick=toggle_white;
}

function toggle_white(){
    body.style.background="radial-gradient(circle,#e6ecec,#cbd5dae1,#cedbe4 )";
    body.style.color="black";
    toggle_bottom.style.backgroundColor="#8cc7ee";
    toggle_img.src="img/moon.png";
    toggle_mode_caption.textContent="Dark-Mode";
    toggle_mode_anchor.onclick=toggle_black;
}

function popup_open(){
    black_background.style.display="block";
    feedback_popup.style.display="block";
}

function popup_close(){
    black_background.style.display="none";
    feedback_popup.style.display="none";
}