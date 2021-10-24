var vid = document.getElementById("vsrc");

var vid1 = document.getElementById("lvsrc");

var vid2 = document.getElementById("rvsrc");

var i=2;

vid.autoplay;
vid1.autoplay;
vid2.autoplay;

function myFunction1() { 
  isSupp = vid.canPlayType("video/mp4");
  if (isSupp == "") {
    vid.src = "vid/video1.mp4";
  } else {
    i=i+1;
    if(i==4){
      i=1;
    }
    vid.src = "vid/video"+i+".mp4";
    fixSwitch(i);
  }
  vid.load();
} 

function fixSwitch(val) {
  switch(val){
    case 1:
      vid1.src = "vid/video3.mp4";
      vid2.src = "vid/video2.mp4";
      break;
    case 2:
      vid1.src = "vid/video1.mp4";
      vid2.src = "vid/video3.mp4";
      break;
    case 3:
      vid1.src = "vid/video2.mp4";
      vid2.src = "vid/video1.mp4";
      break;
  }
}

function myFunction2() { 
  isSupp = vid.canPlayType("video/mp4");
  if (isSupp == "") {
    vid.src = "vid/video1.mp4";
  } else {
    i=i-1;
    if(i==0){
      i=3;
    }
    vid.src = "vid/video"+i+".mp4";
    fixSwitch(i);
  }
  vid.load();
} 


document.querySelector(".itwo").addEventListener("click",myFunction1);

document.querySelector(".ione").addEventListener("click",myFunction2);