
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

function checking(){
  const immilogo = document.querySelector('#logo-immi img');
console.log("immilogo",immilogo);
immilogo.onclick = function(){
  location.href = "index.html";
}

}
checking();