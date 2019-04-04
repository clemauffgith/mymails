var numberMessages = document.getElementsByClassName('avatar').length
console.log(numberMessages);
document.getElementById('count').textContent = numberMessages;



for(var i=0; i<document.getElementsByClassName('trash').length; i++) {

  document.getElementsByClassName('trash')[i].addEventListener("click",
   function(){
     this.parentNode.remove();
    console.log("clic détecté");
    var numberMessages = document.getElementsByClassName('avatar').length
    document.getElementById('count').textContent = numberMessages;
   }
  );


}
