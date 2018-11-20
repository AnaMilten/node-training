import 'colors'
import Assert from '../../lib/assert'

/**
 * Manipulation des chaines de caractères
 */

/*
Chaines dynamiques

Compléter la fonction suivante afin qu'elle retourne le lien suivant :

<a href="http://monlien">mon contenu</a>
*/

const linkify = (href, content) => {
    
}

Assert.equals(
    linkify('https://www.google.fr', 'Go to Google'),
    '<a href="https://www.google.fr">Go to Google</a>'
)