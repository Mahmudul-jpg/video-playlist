var vid = document.getElementById("myVideo"); 

function playVid() { 
  vid.play(); 
} 

function pauseVid() { 
  vid.pause(); 
} 
function myFunction() { 
  document.getElementById("mp4_src").src = "movie2.mp4";
  document.getElementById("mp4_src").src = "movie1.mp4";
  document.getElementById("myVideo").load();
} 