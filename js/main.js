let staticArray = [{
    "page_title": {
        "en": "404 Page Not Found!",
        "fr": "404 Page non trouvée!",
        "es": "¡404 Pagina no encontrada!",
    },
    "random_copy": {
        "en": "Randomize Luna",
        "fr": "Voir une nouvelle Luna Chan",
        "es": "Ver una nueva Luna Chan",
    },
    "link_title": {
        "en": "In the meantime, here are some helpful links:",
        "fr": "En attendant, voici quelques liens utiles :",
        "es": "Mientras tanto, aquí hay algunos enlaces útiles:",
    },
    "link_1": {
        "en": "Go back to the <a href=\"\" id=\"go-back\">previous page.<\/a>",
        "fr": "Revenez à la page <a href=\"\" id=\"go-back\">précédente.<\/a>",
        "es": "Regrese a la página <a href=\"\" id=\"go-back\">anterior.<\/a>",
    },
    "link_2": {
        "en": "Let <a href=\"https:\/\/zenmarket.jp\/help.aspx\">customer service<\/a> know what you were looking for.",
        "fr": "Faites savoir au service client ce que vous recherchez.",
        "es": "Hágale saber al servicio al cliente lo que está buscando.",
    },
    "link_3": {
        "en": "Sign up for a <a href=\"https:\/\/zenmarket.jp\/signup.aspx\">free account<\/a> with ZenMarket and get \u00A5300 Off.",
        "fr": "Créez un compte gratuit avec ZenMarket (300 ¥ de réduction).",
        "es": "Regístrese para obtener una cuenta gratuita con ZenMarket (¥300 de descuento).",
    }
}];

let dataArray = [{
        "title": {
            "en": "Oopsie!",
            "fr": "Oups !",
            "es": "¡Vaya!",
        },
        "body": {
            "en": "It seems Luna forgot where she stored this page. Hopefully it’ll turn up sometime soon! ",
            "fr": "Il semble que Luna ait oublié où elle a stocké cette page. Espérons que cela arrivera bientôt!",
            "es": "Parece que Luna se olvidó de dónde almacenó esta página. ¡Ojalá aparezca pronto!",
        },
        "image_url": "img/1.png",
        "image_left": true
    },
    {
        "title": {
            "en": "This page is on holiday.",
            "fr": "Cette page est en vacances.",
            "es": "Esta página está de vacaciones.",
        },
        "body": {
            "en": "But we're not! ZenMarket customer support is available 7 days a week, 365 days a year.",
            "fr": "Mais nous ne le sommes pas ! Le support client ZenMarket est disponible 7 jours sur 7, 365 jours par an.",
            "es": "¡Pero no lo somos! El servicio de atención al cliente de ZenMarket está disponible los 7 días de la semana, los 365 días del año.",
        },
        "image_url": "img/2.png",
        "image_left": false
    }

];

$(document).ready(function() {

    // Set Language Cookie
    let pageLang = $.cookie("zlang") ? $.cookie("zlang") : "en";
    console.log(pageLang);

    function random404() {

        // Cycle through data randomly  
        let random = dataArray[Math.floor(Math.random() * Object.keys(dataArray).length)];
        let static = staticArray[0];

        //FadeIn on reload
        $(".wrapper").fadeOut(0, function() {
            $(this).fadeIn(800);
        });

        // Change the HTML STATIC
        pageTitle.innerHTML = static.page_title[pageLang];
        randomCopy.innerHTML = static.random_copy[pageLang];
        linkTitle.innerHTML = static.link_title[pageLang];
        link1.innerHTML = static.link_1[pageLang];
        link2.innerHTML = static.link_2[pageLang];
        link3.innerHTML = static.link_3[pageLang];

        // Change the HTML DYNAMIC
        title.innerHTML = random.title[pageLang] || random.title["en"];
        body.innerHTML = random.body[pageLang] || random.body["en"];
        heroimage.src = random.image_url;

        // Swap row direction if image left
        if (random.image_left == true) {
            $(".row").css('flex-direction', "row-reverse");
        } else {
            $(".row").css('flex-direction', "row");
        }
    }

    // Show random quote on document ready
    random404();

    // Randomize on click
    document.querySelector("button").addEventListener("click", function() {
        random404();
    });

    document.getElementById('go-back').addEventListener('click', function(e) {
        history.back();
        e.preventDefault();
    });

});