$(document).ready(function () {

    let $pseudo = $('#pseudo'),
        $mdp = $('#mdp'),
        $confirmation = $('#confirmation'),
        $mail = $('#mail'),
        $envoi = $('#envoi'),
        $reset = $('#rafraichir'),
        $erreur = $('#erreur'),
        $champ = $('.champ');

    $pseudo.keyup(function () {
        console.log($pseudo.val().length > 5);
        if ($pseudo.val().length > 5) {
            $pseudo.removeClass("red");
            $pseudo.addClass("green");
        } else {
            $pseudo.removeClass("green");
            $pseudo.addClass("red");
        }
    });

    $mdp.keyup(function () {
        console.log($mdp.val().length > 5);
        if ($mdp.val().length > 5) {
            $mdp.removeClass("red");
            $mdp.addClass("green");
        } else {
            $mdp.removeClass("green");
            $mdp.addClass("red");
        }
    });

    $confirmation.keyup(function () {
        //if ($confirmation.val() === $mdp.val()) {
        if ($confirmation.val() === $mdp.val()) {
            $confirmation.removeClass("red");
            $confirmation.addClass("green");
        } else {
            $confirmation.removeClass("green");
            $confirmation.addClass("red");
        }
    });

    function verifier(champ){
        if(champ.val() == ""){ // si le champ est vide
            $erreur.css('display', 'block'); // on affiche le message d'erreur
            champ.css({ // on rend le champ rouge
                borderColor : 'red',
                color : 'red'
            });
        }
    }

    $envoi.click(function(e){
        e.preventDefault(); // on annule la fonction par défaut du bouton d'envoi
    
        // puis on lance la fonction de vérification sur tous les champs :
        verifier($pseudo);
        verifier($mdp);
        verifier($confirmation);
        verifier($mail);
    });
    

    // $('#envoi').click(function () {
       
    //     if ($pseudo === true || $mdp === true || $confirmation === true) {
    //         $('#envoi').addClass("greenTwo");
    //     } else {
    //         $('#envoi').addClass("redTwo");
    //     }
    // });

});


