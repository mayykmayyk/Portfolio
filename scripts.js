header = document.getElementById("mainHeader");
listItem = document.querySelectorAll("li a");
console.log(listItem);

var changeHeaderBG = function(){
    var y = window.scrollY;
    if (y >= 50){
        header.classList.add("add-background");
        for (i in listItem){
            listItem[i].classList.add("change-color");
        }
    } else{
        header.classList.remove("add-background");
        for (i in listItem){
            listItem[i].classList.remove("change-color");
        }
    }
};

window.addEventListener("scroll", changeHeaderBG);
