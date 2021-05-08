$(document).ready(function () {

    let $pseudo = $('#pseudo'),
        $mdp = $('#mdp'),
        $confirmation = $('#confirmation'),
        $mail = $('#mail'),
        $envoi = $('#envoi'),
        $reset = $('#rafraichir'),
        $erreur = $('#erreur'),
        $champ = $('.champ');

    $champ.keyup(function () {
        if ($(this).val().length < 5) {
            $(this).css({
                borderColor: 'red',
                color: 'red'
            });
        }
        else {
            $(this).css({
                borderColor: 'green',
                color: 'green'
            });
        }
    });

});


