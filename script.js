
document.addEventListener("mousemove", function(event) {

    var follower = document.querySelector(".follower");

    var mouseX = event.clientX;

    var mouseY = event.clientY;

    follower.style.left = mouseX + "px";

    follower.style.top = mouseY + "px";
    
});