let love = document.querySelector("#love");
let img = document.querySelector("img");

let l = 0;

love.addEventListener("click", function () {
  if (l == 0) {
    love.style.color = "red";
    love.style.color = "red";
    lov.style.transform = " translate(-50% ,-50%)scale(1)";
    lov.style.opacity = 0.7;
    //
    setTimeout(function () {
      lov.style.opacity = 0;
    }, 1000);

    //erase
    setTimeout(function () {
      lov.style.transform = " translate(-50% ,-50%)scale(0)";
    }, 2000);

    l = 1;
  } else {
    love.style.color = "black";
    l = 0;
  }
});
img.addEventListener("dblclick", function () {
  if (l == 0) {
    love.style.color = "red";
    lov.style.transform = " translate(-50% ,-50%)scale(1)";
    lov.style.opacity = 0.7;
    //
    setTimeout(function () {
      lov.style.opacity = 0;
    }, 1000);

    //erase
    setTimeout(function () {
      lov.style.transform = " translate(-50% ,-50%)scale(0)";
    }, 2000);

    l = 1;
  }
});

var con = document.querySelector("#love2");
var lov = document.querySelector("#love2");

con.addEventListener("click", function () {
  lov.style.transform = " translate(-50% ,-50%)scale(1)";
  lov.style.opacity = 0.7;
  //
  setTimeout(function () {
    lov.style.opacity = 0;
  }, 1000);

  //erase
  setTimeout(function () {
    lov.style.transform = " translate(-50% ,-50%)scale(0)";
   }, 2000);
});

//  <div id="main" class="main">
// Comment
//  <input type="text" id="in" h>
//  <button id="btn" onclick="comment()">Comment</button>
//  <p id="output">

//  </p>
// </div>
// function comment()
//  {
//     let print= document.getElementById('in').value
//     document.getElementById('output').innerHTML="<p>Welcome :  "+ print+"</p>"

// }

// let div=document.getElementById('main')
// let display=0

// function hideandshow(){
//     if(display == 1)
//     {
//         div.style.display='block'
//         display = 0;
//     }
//     else{
//         div.style.display='none'
//         display = 1;
//     }
//}
