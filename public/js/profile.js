var settingsheight1 = document.querySelector(".settings");
var darkbtn = document.getElementById("dark-btn");
var chatheight1 = document.querySelector(".enclose-chat");

function settingsMenuToggle(){
    settingsheight1.classList.toggle("settings-height1");
}
darkbtn.onclick = function(){
    darkbtn.classList.toggle("dark-btn-on");
    document.body.classList.toggle("dark-theme");

    if(localStorage.getItem("theme")== "light"){
        localStorage.setItem("theme","dark");
    }
    else{
        localStorage.setItem("theme","light")
    }
}

if(localStorage.getItem("theme")== "light"){
    darkbtn.classList.remove("dark-btn-on");
    document.body.classList.remove("dark-theme");
}
else if(localStorage.getItem("theme")== "dark"){
    darkbtn.classList.add("dark-btn-on");
    document.body.classList.add("dark-theme");
}
else{
    localStorage.setItem("theme","light");
}
function clickSide(){
  if($(".enclose-chat").css('display') === "none"){
    $(".sidebar-button").text("Hide Chat");
  }
  else{
    $(".sidebar-button").text("Show Chat");
  }
}
function clickMore(){
  if($(".event").css('display') === "none"){
    $(".seeMore-button").text("See Less");
  }
  else{
    $(".seeMore-button").text("See All");
  }
}
$(".sidebar-button").on("click", function (){
  $(".enclose-chat").slideToggle();
});

$(".seeMore-button").on("click", function (){
  $(".event").slideToggle();
});
$(".refresh").on("click", function (){
  location.reload();
})
