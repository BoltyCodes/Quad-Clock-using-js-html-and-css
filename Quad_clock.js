let diallines=document.getElementsByClassName("diallines")
let clock=document.getElementsByClassName("clock")[0];

// string to hold all the HTML
let clockDiallines = "";

for(let i=1; i<60; i++){ clock.innerHTML +="<div class='diallines'></div>"; diallines[i].style.transform="rotate("+6*i+"deg)";
}
function clocks(){
  let weekday=new Array(7);
    let d=new Date();
  let h=d.getHours();
  let m=d.getMinutes();
  let s=d.getSeconds();
  let date=d.getDate();
  let month=d.getMonth()+1;
  let year=d.getFullYear();
  
  let hdeg=h*30+m*(360/720);
  let mdeg=m*6+s*(360/3600);
  let sdeg=s*6;
  
  
  
   weekday[0]="Sunday";
   weekday[1]="Monday";
   weekday[2]="Tuesday";
   weekday[3]="Wednesday";
   weekday[4]="Thursday";
   weekday[5]="Friday";
   weekday[6]="Saturday";
  let day=weekday[d.getDay()];
if(month<9){
  month="0"+month;
}
  let he1=document.querySelector(".hour-hand");
    let me1=document.querySelector(".minute-hand");
    let se1=document.querySelector(".second-hand");
  let date1=document.querySelector(".date");
  let day1=document.querySelector(".day");
  
  
  he1.style.transform="rotate("+hdeg+"deg)";
    me1.style.transform="rotate("+mdeg+"deg)";
    se1.style.transform="rotate("+sdeg+"deg)";
  
  date1.innerHTML=date+"/"+month+"/"+year;
  day1.innerHTML=day;
  
}
setInterval("clocks()",100);
