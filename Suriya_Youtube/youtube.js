var menuIcone = document.querySelector(".menu_icon");
var sidebar = document.querySelector(".sidebar");
var video_container = document.querySelector(".video_container");
var chips = document.querySelector(".chips")

menuIcone.onclick = function()
{
sidebar.classList .toggle("small_sidebar");
video_container.classList.toggle("larg-video_container")
chips.classList .toggle("large-chips")
}