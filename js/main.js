let dataArray = [
  {
    title: "The only sin is ignorance",
    body: "Christopher Marlowe",
    image_url: "https://picsum.photos/300/300",
    image_left: true,
  },
  {
    title:
      "A man is his own easiest dupe, for what he wishes to be true he generally believes to be true",
    body: "Demosthenes",
    image_url: "https://picsum.photos/300/300",
    image_left: true,
  },
  {
    title:
      "A lie can travel halfway around the world while the truth is putting on its shoes",
    body: "Mark Twain",
    image_url: "https://picsum.photos/300/300",
    image_left: true,
  },
  {
    title:
      "Great minds discuss ideas; average minds discuss events; small minds discuss people",
    body: "Eleanor Roosevelt",
    image_url: "https://picsum.photos/300/300",
    image_left: true,
  },
  {
    title: "If you have a garden and a library, you have everything you need",
    body: "Marcus Tullius Cicero",
    image_url: "https://picsum.photos/300/300",
    image_left: true,
  },
  {
    title: "Truth comes out in wine",
    body: "Pliny the Elder",
    image_url: "https://picsum.photos/300/300",
    image_left: true,
  },
  {
    title: "Everything in the universe is within you. Ask all from yourself",
    body: "Rumi",
    image_url: "https://picsum.photos/300/300",
    image_left: true,
  },
  {
    title:
      "When I get a little money I buy books; and if any is left I buy food and clothes",
    body: "Desiderius Erasmus",
    image_url: "https://picsum.photos/300/300",
    image_left: true,
  },
]

let staticArray = [
  {
    button_copy: "Back to ZenMarket.jp",
    redirect_copy:
      'You will be redirected to the homepage in <span id="countdown">10</span> secs',
  },
]

$(document).ready(function () {
  // logs
  //console.log(dataArray);
  //console.log(Object.values(dataArray));
  //console.log(Math.floor(Math.random() * Object.keys(dataArray).length))

  let timeleft = 11 //set timer

  function countdown() {
    timeleft-- // take away 1 per run through function
    document.getElementById("countdown").textContent = " " + timeleft + " " // change text based on timeleft value
    if (timeleft <= 0) setTimeout(redirect)
    // if timeleft is less than or equal to run redirect
    else setTimeout(countdown, 1000) // else keep counting down in values of 1 second
  }

  function redirect() {
    window.location = "https://zenmarket.jp/" //redirect to homepage
  }

  function random404() {
    let random =
      dataArray[Math.floor(Math.random() * Object.keys(dataArray).length)] // Cycle through data randomly
    let static = staticArray[0] // I want this data to be seperate from the randomize and it stays same each time

    // Change the HTML
    title.innerText = random.title
    body.innerText = random.body
    button_copy.innerText = static.button_copy
    redirect_copy.innerHTML = static.redirect_copy
    heroimage.src = random.image_url
  }

  // Show random quote
  random404()

  //start countdown
  countdown()

  // Randomize on click
  document.querySelector("button").addEventListener("click", function () {
    // show a new random quote
    random404()
    //reset timer to 10
    timeleft = 11
  })
})
