/**
 * fonction qui ajoute une class a l'element passé en parametre et l'enleve au bout de 2010ms
 * @param element
 * @param animation
 */
function addAnimation(element, animation) {
    // element.classList retourne une list des class de l'élément, on va donc pourvoir utiliser add ou remove pour
    // ajouter ou supprimer une class.
    element.classList.add(animation);
    // setTimeout est une fonction qui va exécuter une code (handler) après avoir attendu un temps donné.
    setTimeout(() => { // avec setTimeout, on attend 2010ms avant d'enlever la class (sans ça, on ne pourra plus jouer l'animation en cliquant
        element.classList.remove(animation)
    }, 2010)
}

/**
 * fonction qui va animer l'element passé en parametre, grâce à la fonction animate
 * @param element
 */
function anim(element) {
    element.animate([
        // en premier parametre, on passe un tableau de keyframes, c'est un peut le plan de notre animation
        { transform: 'scale(1)', background: 'blue' }, // chaque keyframe est un objet dans lequel on met notre style css avec sa valeur (style: 'valeur')
        { transform: 'scale(1.1)', background: 'red' },
        { transform: 'scale(0.9)', background: 'green' },
        { transform: 'scale(1.1)', background: 'yellow' },
        { transform: 'scale(1)', background: 'blue' },
    ], {
        // options est un objet on y défini la durée, le nombre de répétitions etc : https://developer.mozilla.org/fr/docs/Web/API/Element/animate
        duration: 1000,
        iterations: 2
    })
}