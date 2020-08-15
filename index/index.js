//document.getElementById('tofu').innerHTML='tofayel';

 /*function myfunction(){
alert('hey');
 };
  var myvar = document.querySelector('#demo  ');

  function message1(){
myvar.innerHTML='you press button1';
  };
function message2() {
  myvar.innerHTML = 'you press button2';
};
var pictures = document.querySelector('#img');
function picture1(){
pictures.src='image/pexels1.jpeg'
};
function picture2() {
  pictures.src = 'image/pexels2.jpeg'
};





var myarry = ['image/pexels1.jpeg', 'image/pexels2.jpeg','image/pexels3.jpeg']

picture=document.querySelector('#img');
count=0;
function next() {
count++;
if(count>=myarry.length){
  count=0;

picture.src=myarry[count];



}else{
  picture.src = myarry[count];
}

};
function previous(){
  count--;
  if (count ==-1 ) {
    count = myarry.length-1;

    picture.src = myarry[count];



  } else {
    picture.src = myarry[count];
  }

};




var myvar = document.querySelector('#demo');

function add(){
myvar.classList.add('demo');


};
function remove() {
  myvar.classList.remove('demo');


};


var myvar = document.querySelector('h1');

myvar.addEventListener("mousemove",function(){

myvar.classList.add('demo');


});
myvar.addEventListener("mouseout", function () {

  myvar.classList.remove('demo');


});



//menu icon

var myvar = document.querySelector('.container');
 function mychange(){

myvar.classList.toggle('change');
 };*/
var acc = document.getElementsByClassName("container");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
  
    var pane = this.nextElementSibling;
   

    if (pane.style.display === "block") {
      pane.style.display = "none";
    } else {
      pane.style.display = "block";
    
  }

  });
}
