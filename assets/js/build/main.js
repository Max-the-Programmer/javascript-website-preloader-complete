
document.addEventListener("DOMContentLoaded", (event) =>{

    var images_loaded = 0;
    var images_to_load = document.querySelectorAll("img[data-src]");

    images_to_load.forEach(function(img){

        img.src = img.getAttribute("data-src");
        img.removeAttribute("data-src");

        img.onload = function(){
            images_loaded++;

            if(images_loaded == images_to_load.length){
                document.getElementById("bar-progress").style.width = '100%';

                setTimeout(function(){
                    document.getElementById("preloader").classList.add("loaded");
                }, 250);

                setTimeout(function(){
                    document.getElementById("content").classList.remove("loading");
                    document.getElementById("preloader").style.display = "none";
                }, 1250);

            }else{
                document.getElementById("bar-progress").style.width = (images_loaded/images_to_load.length*100) + '%';
            }

        }
    });


});