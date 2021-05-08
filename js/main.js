$(document).ready(function () {

    $(':input').keyup(function () {

        //let recup = $('input[id="pseudo"]').val().length;


        if ($('input[id="pseudo"]').val().length < 5) {
            $('input[id="pseudo"]').toggleClass("red");
            //$('input[id="pseudo"]').removeClass("start");
            console.log($('input[id="pseudo"]').val().length);
        } else {
           
            $('input[id="pseudo"]').toggleClass("green");
            //$('input[id="pseudo"]').removeClass("start");
        }

    });
});

