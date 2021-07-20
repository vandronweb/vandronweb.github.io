/*! Download Button With Timer Using CSS & JS
    Version: 1.0.0
    Author: Siva - Creators Help Tamil
    Website: https://creatorshelptamil.blogspot.com/
*/
var opt = { time: 30, txt1: "You Can Download The File In ", txt2: " Seconds", onload: true }; /* Customizable Values */
var a = document.querySelectorAll("a");
a.forEach((a) => {
 if (a.href.match(/#cht-dt/g)) {
  a.href = a.href.replace(/#cht-dt/g, "");
  a.className = "cht-dt";
  var t,id,d = opt;
  if (d.onload) {
   counter();
  } else {
   a.onclick = () => {
    counter();
    return false;
   };
  }
  function counter() {
   const p = document.createElement("p");
   p.className = "cht-dt";
   t = d.time.toString();
   p.textContent = d.txt1 + t + d.txt2;
   a.parentNode.replaceChild(p, a);
   id = setInterval(() => {
    t--;
    if (t < 0) {
     clearInterval(id);
     p.parentNode.replaceChild(a, p);
     if (!d.onload) {
      window.location.href = a.href;
     }
    } else {
     p.textContent = d.txt1 + t + d.txt2;
    }
   }, 1000);
  }
 }
});