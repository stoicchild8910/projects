const body = document.querySelector("body");

/*
//if using API, you nedd addEventListener Loading
function handleImgLoad(){
    console.log("finished loading");
}
*/

function paintImage(imgNumber){
    const image = new Image();
    image.src = `./image/${imgNumber+1}.jpg`;
    //always use classList
    image.classList.add("bgImage");
    // image.style.height = document.body.style.height;
    body.appendChild(image);
    // image.addEventListener("loadend", handleImgLoad);
}

function genRandom(){
    const number = Math.floor(Math.random()*13);
    return number;
}

function init(){
    const randNum = genRandom();
    paintImage(randNum);
}
init();