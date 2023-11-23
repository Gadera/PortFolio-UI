// var hamburgerToggle = document.getElementById('hamburger-toggle');
// var mobileMenu = document.querySelector('.mobile-menu');

// hamburgerToggle.addEventListener('click', () => {
//   mobileMenu.classList.toggle('show');
// });
  
// var closeModalBtn = document.getElementById("closemodal");
// var modalBackground = document.getElementById("modal-background");

//     closeModalBtn.addEventListener("click", function() {
//         modalBackground.style.display = "none";
//     });

var hamburgerToggle = document.getElementById("hamburger-toggle");
var glass = document.getElementsByClassName("fa-magnifying-glass")[0];
var xmark = document.getElementsByClassName("fa-xmark")[0];
var mobileMenu = document.getElementById("mobile-menu");
var body = document.body;

hamburgerToggle.addEventListener("click", function() {
    if (glass.style.display === "none" || glass.style.display === "") {
        glass.style.display = "block";
    } else(
        glass.style.display = "none")
});

hamburgerToggle.addEventListener("click", function() {
    if (xmark.style.display === "none" || xmark.style.display === "") {
        xmark.style.display = "block";
    } else(xmark.style.display = "none")
});

hamburgerToggle.addEventListener('click', () => {
    if (mobileMenu.style.display === "none" || mobileMenu.style.display === "") {
        mobileMenu.style.display = "block";
        body.classList.add("no-scroll");
    } else {
        mobileMenu.style.display = "none";
        body.classList.remove("no-scroll");
    }
});



var owl = $('.owl-carousel');
owl.owlCarousel({
    items:4,
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:5000,
    autoplayHoverPause:true
});
$('.play').on('click',function(){
    owl.trigger('play.owl.autoplay',[1000])
})
$('.stop').on('click',function(){
    owl.trigger('stop.owl.autoplay')
})


// var header = document.getElementById("header");

// window.addEventListener("scroll", function(){
//     console.log(window.pageYOffset);

//     if(this.window.pageYOffset > 100){
//         console.log("Greater than 100")
//         header.style.position = "fixed"
//     }
// })