const randomizeText = () => {
  const phrase = document.querySelector('.random-word');
  const compStyles = window.getComputedStyle(phrase);
  const animation = compStyles.getPropertyValue('animation');
  const animationTime = parseFloat(animation.match(/\d*[.]?\d+/)) * 1000;
  
  const phrases = ['Indrapuram','Ontario'];
  
  i = randomNum(i, phrases.length);
  const newPhrase = phrases[i];
  
  setTimeout(() => {
    phrase.textContent = newPhrase;
  }, 400); // time to allow opacity to hit 0 before changing word
}

const randomNum = (num, max) => {
  let j = Math.floor(Math.random() * max);
  
  // ensure diff num every time
  if (num === j) {
    return randomNum(i, max);
  } else {
    return j;
  }
}

const getAnimationTime = () => {
  const phrase = document.querySelector('.random-word');
  const compStyles = window.getComputedStyle(phrase);
  let animation = compStyles.getPropertyValue('animation');
  
  // firefox support for non-shorthand property
  animation != "" ? animation : animation = compStyles.getPropertyValue('-moz-animation-duration');
  
    // webkit support for non-shorthand property
  animation != "" ? animation : animation = compStyles.getPropertyValue('-webkit-animation-duration');
  
  
  const animationTime = parseFloat(animation.match(/\d*[.]?\d+/)) * 1000;
  return animationTime;
}

randomizeText();
setInterval(randomizeText, getAnimationTime());

// MODAL LOGIC

function modalLoading(){
    console.log('loading')
}

function onLoadfun(){
var modal = document.getElementById("myModal");


var span = document.getElementsByClassName("close")[0];
 const buttonModal = document.getElementById("modal-button");
 console.log('run');
 setTimeout(()=>{
     modal.style.display = "block";
 }, 1000);


span.onclick = function() {
 modal.style.display = "none";
}

window.onclick = function(event) {
 if (event.target == modal) {
   modal.style.display = "none";
 }
}
}

function closemodal(){
var modal = document.getElementById("myModal");
modal.style.display ="none"

setTimeout(()=>{
    modal.style.display ="none"
},500);
swal("Thank You!", "We have Registered Your Request! We Will Revert you back soon", "success");
}

function updatemenu() {
    if (document.getElementById('responsive-menu').checked == true) {
      document.getElementById('menu').style.borderBottomRightRadius = '0';
      document.getElementById('menu').style.borderBottomLeftRadius = '0';
    }else{
      document.getElementById('menu').style.borderRadius = '0px';
    }
  }
function run(){
    setTimeout(()=>{
        const modal = document.querySelector('#modal-button');
    document.querySelector('#modal-button').click();
    console.log("check1");
    },3000);
}