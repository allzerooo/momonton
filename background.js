const body = document.querySelector("body");
const IMG_NUM = 5;


function paintImage(img_num) {
   const image = new Image();
   image.src = `images/${img_num + 1}.jpg`;
   image.classList.add('bgImage');
   body.prepend(image);
}


function genRandom() {
   const num = Math.floor(Math.random() * IMG_NUM);
   return num;
}


function init() {
   const randomNumber = genRandom();
   paintImage(randomNumber);
}

init();