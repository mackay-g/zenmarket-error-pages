$(document).ready(function () {
  // Set Language Cookie
  let pageLang = $.cookie("zlang") ? $.cookie("zlang") : "en"
  // console.log(pageLang)

  function random404(jsonData) {
    // Cycle through data randomly
    let random =
      jsonData.dataArray[
        Math.floor(Math.random() * Object.keys(jsonData.dataArray).length)
      ]
    let static = jsonData.staticData

    //FadeIn on reload
    $(".wrapper").fadeOut(0, function () {
      $(this).fadeIn(800)
    })

    // Change the HTML STATIC
    $("#pageTitle").innerHTML = static.page_title[pageLang]
    $("#randomCopy").innerHTML = static.random_copy[pageLang]
    $("#linkTitle").innerHTML = static.link_title[pageLang]
    $("#link1").innerHTML = static.link_1[pageLang]
    $("#link2").innerHTML = static.link_2[pageLang]
    $("#link3").innerHTML = static.link_3[pageLang]

    // Change the HTML DYNAMIC
    $("#title").innerHTML = random.title[pageLang] || random.title["en"]
    $("#body").innerHTML = random.body[pageLang] || random.body["en"]
    $("#heroimage").src = random.image_url

    // Swap row direction if image left
    if (random.image_left == true) {
      $(".row").css("flex-direction", "row-reverse")
    } else {
      $(".row").css("flex-direction", "row")
    }
  }

  $("#go-back").click(function (e) {
    history.back()
    e.preventDefault()
  })

  // Load JSON and show random quote
  let jsonFile = "js/data.json"
  let jsonData
  $.getJSON(jsonFile)
    .done(function (data) {
      jsonData = data
      random404(jsonData)
      // console.log("Json Data:", data)

      // Randomize on click
      $("#randomize").show()
      $("#randomize").click(function () {
        random404(jsonData)
      })
    })
    .fail(function () {
      // console.log("No JSON :(")
    })
})
