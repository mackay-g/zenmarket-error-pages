$(document).ready(function () {
    $.getJSON("js/new.json", function (data) {
        //console.log(data.dynamic);
        //console.log(Math.floor(Math.random() * Object.keys(data).length))

        function randomQuote() {
            
            let random = data.dynamic[Math.floor(Math.random() * (data.dynamic).length)];
            console.log(random);
            let static = data.dynamic;
           
           title.innerText = random.Title;
           //body.innerText = random;
           //button.innerText = static.button;
            redirect.innerHTML = static.redirect;
            heroimage.src = random.image_url;
        }
        randomQuote();
        document.querySelector("button").addEventListener('click', randomQuote)

    }).fail(function () {
        console.log("An error has occurred.");
    });
});

// var timeleft = 30; //set timer
// function countdown() {
//     timeleft--; // take away 1 per run through function
//     document
//         .getElementById("countdown")
//         .textContent = " " + timeleft + " "; // change text based on timeleft value
//     if (timeleft <= 0)
//         setTimeout(redirect); // if timeleft is less than or euqal to run redirect
//     else
//         setTimeout(countdown, 1000); // else keep counting down in values of 1 second
// }
// function redirect() {
//     window.location = "https://zenmarket.jp/"; //redirect to homepage
// }
// countdown(); // run through countdown function again
