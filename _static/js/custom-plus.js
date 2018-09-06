/**
 * LIGHTBOX2 - Utilise ligthbox2 automatiquement sur toutes les images, avec un parent a.image-reference
 * Une même classe sur les images permet de créer un groupe d'images et afficher les boutons suivant / précédent
 * -- utiliser la directive :class: lightbox-{goup-name}
 */

/**
 * Get the class_name to build a group if needed, by default build a single name like "lightbox-img{X}"
 *
 * @param i - index of each()
 * @param $a - a $jquery
 * @returns string - Group name : lightbox-{goup-name}
 */
var getDataLightboxGroup = function(i, $a) {
    var class_list = $a.attr('class').split(/\s+/),
        group_name = 'lightbox-img'+i;
    $.each(class_list, function(j, class_name) {
        if (class_name.startsWith('lightbox-')) {
            group_name = class_name;
            return false;
        }
    });
    return group_name;
}

$('.image-reference').each(function(i, e){
    $(this).attr('data-lightbox', getDataLightboxGroup(i, $(this)));
});

lightbox.option({
    'alwaysShowNavOnTouchDevices': true,
    'showImageNumberLabel': false,
    'resizeDuration': 20,
    'fadeDuration' : 20,
    'wrapAround': true,
});
