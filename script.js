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

// ===============================
// MOOD MUSIC
// ===============================

const moodMusic = {
    happy: new Audio("music/happy.mp3"),
    sad: new Audio("music/sad.mp3"),
    angry: new Audio("music/angry.mp3"),
    confused: new Audio("music/confused.mp3")
};

// Make the music loop
Object.values(moodMusic).forEach(audio => {
    audio.loop = true;
    audio.volume = 0.5;
});

let currentMusic = null;

function playMoodMusic(mood) {

    // Stop the previous mood's music
    if (currentMusic) {
        currentMusic.pause();
        currentMusic.currentTime = 0;
    }

    // Find the new mood's music
    const newMusic = moodMusic[mood];

    if (newMusic) {
        currentMusic = newMusic;

        newMusic.currentTime = 0;

        newMusic.play().catch(error => {
            console.log("Music needs user interaction:", error);
        });
    }
}


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
   playMoodMusic(mood);

        
   //Start the fan again when choosing mood
   fan.classList.remove("stopped");

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
   BLANK MIND
   ========================================= */

function blankMind() {

    // Remove the GIF
    document.body.style.backgroundImage = "none";

    // Return to the original background
    document.body.style.background = "var(--crimson)";

    // Stop Fan
    fan.classList.add("stopped");

    // Change message
    message.innerText =
        "Blank mind. No thoughts, just breeze 🫧 ♡";
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