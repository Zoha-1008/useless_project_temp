/* =========================================
   MOOD-FAN
   JavaScript
   ========================================= */


/*
   Find the fan and mood message
   from our index.html
*/

const fan = document.getElementById("fan-blades");
const message = document.getElementById("mood-message");


/* =========================================
   MOOD FUNCTION
   =========================================

   This function runs whenever the
   user clicks one of the mood buttons.

   Example:

   chooseMood("happy");

   means the mood is "happy".
*/

function chooseMood(mood) {


    /* =====================================
       HAPPY
       ===================================== */

    if (mood === "happy") {
        
        // Change background to happy GIF
        document.body.style.backgroundImage =
        "url('images/happy.gif')";

        // Make the fan spin quickly
        fan.style.animationDuration = "0.7s";

        // Make the fan spin normally
        fan.style.animationDirection = "normal";

        // Change the message
        message.innerText =
            "Your fan is feeling happy! ☀️ ♡";
    }


    /* =====================================
       SAD
       ===================================== */

    else if (mood === "sad") {

       // Change background to sad GIF
       document.body.style.backgroundImage =
        "url('images/sad.gif')";

        // Make the fan spin slowly
        fan.style.animationDuration = "3s";

        fan.style.animationDirection = "normal";

        message.innerText =
            "A tiny breeze for a tiny mood 🌧️ ♡";
    }


    /* =====================================
       ANGRY
       ===================================== */

    else if (mood === "angry") {

        // Change background to angry GIF
        document.body.style.backgroundImage =
        "url('images/angry.gif')";

        // Make the fan spin VERY fast
        fan.style.animationDuration = "0.2s";

        fan.style.animationDirection = "normal";

        message.innerText =
            "THE FAN IS VERY ANGRY TOO 😡";
    }


    /* =====================================
       CONFUSED
       ===================================== */

    else if (mood === "confused") {

        // Change background to confused GIF
        document.body.style.backgroundImage =
        "url('images/confused.gif')";
        
        // Medium-speed fan
        fan.style.animationDuration = "1.5s";

        /*
           Alternate makes the fan
           change its animation direction.
        */

        fan.style.animationDirection = "alternate";

        message.innerText =
            "The fan has no idea what's happening 😵";
    }


    /* =====================================
       MESSAGE ANIMATION
       ===================================== */

    // Make the message slightly bigger
    message.style.transform = "scale(1.05)";


    // Return it to normal size after 200ms
    setTimeout(function () {

        message.style.transform = "scale(1)";

    }, 200);

}


/* =========================================
   PAGE LOADED
   =========================================

   This runs when the website has finished
   loading.
*/

window.addEventListener("load", function () {

    document.body.classList.add("loaded");

});