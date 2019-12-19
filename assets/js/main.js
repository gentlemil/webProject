// -------------------- SHOW-HIDE MENU -------------------

$(document).ready(function () {
    $("button").click(function () {
        $("#navigation").toggleClass("main");
        $("button.button").toggleClass("active");
        $("#main-page").toggleClass("active");
        $("#about").toggleClass("active-about");
        $("#abilities").toggleClass("active-abilities");
        $(".leftPart").toggleClass("activeLeftPart");
        $("#services").toggleClass("active-services");
        $("#portfolio").toggleClass("active-portfolio");
        $("#testimonials").toggleClass("active-testimonials");
        // $("#testimonials .container").toggleClass("active-container");
        // $("#testimonials .owl-carousel").toggleClass("active-owl");
        $("#numbers").toggleClass("active-numbers");
        $("#news").toggleClass("active-news");
        $("#contact").toggleClass("active-contact");
        $("footer").toggleClass("active-footer");

    });
});

// --------------------- SECTION 1 ----------------------------------
// ------------------------------------------------------------------

// ------------------------------------------------------------------
// ----------------- NAVIGATION - SMARTPHONE ------------------------
// ------------------------------------------------------------------
$(document).ready(function () {
    $(".cross").hide();
    $(".menuNew").hide();
    $(".hamburger").click(function () {
        $(".menu").slideToggle("slow", function () {
            $(".hamburger").hide();
            $(".cross").show();
        });
    });

    $(".cross").click(function () {
        $(".menuNew").slideToggle("slow", function () {
            $(".cross").hide();
            $(".hamburger").show();
        });
    });
});



// --------------------- SECTION 2 ----------------------------------
// ------------------------------------------------------------------

// ------------------------------------------------------------------
// -------------------- MAIN PAGE - TEXT-TYPING ---------------------
// ------------------------------------------------------------------
var TxtType = function (el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function () {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
    }

    setTimeout(function () {
        that.tick();
    }, delta);
};

window.onload = function () {
    var elements = document.getElementsByClassName('typewrite');
    for (var i = 0; i < elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
            new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
    document.body.appendChild(css);
};

// --------------------- SECTION 3 ----------------------------------
// ------------------------------------------------------------------

// --------------------- SECTION 4 ----------------------------------
// ------------------------------------------------------------------

// --------------------- SECTION 5 ----------------------------------
// ------------------------------------------------------------------

// --------------------- SECTION 6 ----------------------------------
// ------------------------------------------------------------------

// ------------------- SWITCHING PHOTOS IN GALLERY ------------------
$(".top-tab li").click(function () {
    $(".sub-tab > li").css({ 'display': 'none' });
    $(".sub-tab li[data-menu=" + $(this).data('menu') + "]").css({ 'display': 'block' });
    $(".filter li").hide(200);
    $(".filter li[data-filter=" + $(this).data('menu') + "]").delay(200).show(200);
    console.log($(".sub-tab li[data-menu='" + $(this).data('menu') + "']"));
});

$(".sub-tab li").click(function (e) {
    e.stopPropagation();
    $(".filter li").hide(200);
    $(".filter li[data-filter=" + $(this).data('menu') + "]").delay(200).show(200);
});

// --------------------- SECTION 7 ----------------------------------
// ------------------------------------------------------------------

// --------------------- SECTION 8 ----------------------------------
// ------------------------------------------------------------------

// --------------------- SECTION 9 ----------------------------------
// ------------------------------------------------------------------

// --------------------- SECTION 10 ----------------------------------
// ------------------------------------------------------------------

// --------------------- SECTION 11 ----------------------------------
// ------------------------------------------------------------------






// ----------------- BUTTON SCROLL TO THE TOP ----------------------
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
// -------------------------------- TESTIMONIALS ---------------------------------------
$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        items: 1,
        lazyLoad: true,
        loop: true,
        margin: 10
    });
});

// ------------------------ COUNTING TO THE NUMBER ---------------------------------
$('#numbers .container .number .fuse h3').each(function () {
    $(this).prop('Counter', 0).animate({
        Counter: $(this).text()
    }, {
        duration: 4000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
});
// -------------------- ROLLING (ABILITIES) ----------------------
// sliding = document.getElementsByClassName("#abilities .container .rightPart .line .lineInside .active");

// // When the user scrolls down 20px from the top of the document, show the button
// window.onscroll = function () { scrollFunction() };

// function scrollFunction() {
//     if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//         sliding.style.display = "block";
//     } else {
//         sliding.style.display = "none";
//     }


// --------------------------------------
AOS.init();
// --------------------------------------
