document.addEventListener("DOMContentLoaded",e=>{var t=0,n=document.querySelectorAll("img[data-src]");n.forEach(function(e){e.src=e.getAttribute("data-src"),e.removeAttribute("data-src"),e.onload=function(){++t==n.length?(document.getElementById("bar-progress").style.width="100%",setTimeout(function(){document.getElementById("preloader").classList.add("loaded")},250),setTimeout(function(){document.getElementById("content").classList.remove("loading"),document.getElementById("preloader").style.display="none"},1250)):document.getElementById("bar-progress").style.width=t/n.length*100+"%"}})});