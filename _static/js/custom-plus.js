/**
 * LIGHTBOX - Utilise ligthbox automatiquement sur toutes les images
 * Une même classe sur les images permet de créer un groupe d'images et afficher les boutons suivant / précédent
 * -- utiliser la directive :class: lightbox-mw
 */

/**
 * Get the class_name to build a group if needed, by default build a name like "IMGX"
 * @param i - index of each()
 * @param $img - Img $jquery
 * @returns string - Group name
 */
var getDataLightboxGroup = function(i, $img) {
    var class_name = $img.attr('class');
    // align-right / align-let are not  perso classes ...
    if ('undefined' === typeof class_name && (class_name !== 'align-right' || class_name !== 'align-left')) {
        return class_name;
    }
    return 'IMG'+i;
}

//
$('img').each(function(i, e){
    $(this).attr('data-lightbox', getDataLightboxGroup(i, $(this)));
    // Hack :: lightbox.start($link) - $link must contain a href attribute ?
    $(this).attr('href', $(this).attr('src'));
    $(this).click(function (e) {
        e.preventDefault();
        lightbox.start($(this));
        return false;
    });
});

lightbox.option({
    'alwaysShowNavOnTouchDevices': true,
    'showImageNumberLabel': false,
    'resizeDuration': 20,
    'fadeDuration' : 20,
    'wrapAround': true,
});
