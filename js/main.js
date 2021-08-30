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
  
    $(".page404 .wrapper").fadeOut(0, function () {
      $(this).fadeIn(600)
    })

    // Change the HTML STATIC
    $("#pageTitle").html(static.page_title[pageLang])
    $("#randomCopy").html(static.random_copy[pageLang])
    $("#linkTitle").html(static.link_title[pageLang])
    $("#link1").html(static.link_1[pageLang])
    $("#link2").html(static.link_2[pageLang])
    $("#link3").html(static.link_3[pageLang])

    // Change the HTML DYNAMIC
    $("#title").html(random.title[pageLang] || random.title["en"])
    $("#body").html(random.body[pageLang] || random.body["en"])
    $("#heroimage").attr("src", random.image_url)

    // Swap row direction if image left
    if (random.image_left == true) {
      $(".row").css("flex-direction", "row-reverse")
    } else {
      $(".row").css("flex-direction", "row")
    }
  }

 

  // Load JSON and show random quote
  let jsonFile = "js/data.json"
  let jsonData
  $.getJSON(jsonFile)
    .done(function (data) {
      jsonData = data
      random404(jsonData)
      console.log("Json Data:", data)

      //Navigate back
      $("#go-back").click(function (e) {
        e.preventDefault();
        window.history.back();
        //console.log("Test");
        
      })

      // Randomize on click
      $("#randomize").show()
      $("#randomize").click(function () {
        random404(jsonData)
      })
    })
    .fail(function () {
      // console.log("No JSON :(")
      $(".page404 .wrapper").show();
    })
})
