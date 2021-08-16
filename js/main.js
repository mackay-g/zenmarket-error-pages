$(document).ready(function () {
    $.getJSON("js/data.json", function (data) { // get JSON file
        
        // logs
        
        //console.log(data);
        //console.log(Object.values(data));
        //console.log(Math.floor(Math.random() * Object.keys(data).length))

        function random404() {
            let random = data[Math.floor(Math.random() * Object.keys(data).length)]; // Cycle through data randomly
            let static = data[0]; // I want this data to be seperate from the randomize and it stays same each time
            
            // Change the HTML
            title.innerText = random.title;
            body.innerText = random.body;
            button_copy.innerText = static.button_copy;
            redirect_copy.innerHTML = static.redirect_copy;
            heroimage.src = random.image_url;
        }
        // Show random quote
        random404();

        // Randomize on click
        document.querySelector("button").addEventListener('click', random404)

    }).fail(function () {
        console.log("An error has occurred.");
    });
});

// var timeleft = 11; //set timer
function countdown() {
    timeleft--; // take away 1 per run through function
    document
        .getElementById("countdown")
        .textContent = " " + timeleft + " "; // change text based on timeleft value
    if (timeleft <= 0)
        setTimeout(redirect); // if timeleft is less than or equal to run redirect
    else
        setTimeout(countdown, 1000); // else keep counting down in values of 1 second
}
function redirect() {
    window.location = "https://zenmarket.jp/"; //redirect to homepage
}
countdown(); // run through countdown function again