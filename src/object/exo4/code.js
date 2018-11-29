import 'colors'
import Assert from '../../lib/assert'
import analyze from './correction'

console.log('Object > exo4'.blue)
console.log('Créer une fonction qui décompose les caractéristiques d\'une chaîne de caractères   dans un objet (on ne tiendra pas compte des accents) :'.green)
console.log(`@example

lower => nombre de caractères en minuscule
upper => nombre de caractères en majuscule
letter => nombre de caractères en minuscule ou en majuscule
number => nombre de nombres entiers
len => longueur de la châine
spaces => nombre d'espaces
specials => nombre de caractères spéciaux (on ne compte ni les lettres et ni les nombres)

analyze('Romain') => {
    lower: 5,
    upper: 1,
    letter: 6,
    number: 0,
    len: 6,
    spaces: 0,
    specials: 0
}

analyze('Romain + 33 OK$') => {
    lower: 5,
    upper: 3,
    letter: 8,
    number: 2,
    len: 15,
    spaces: 3,
    specials: 5
}
`)
console.log('')

/**
 * code
 * 
 * @todo
 * - Remove import of correction
 * - Write your own correction below to make the tests work
 */


/**
 * test
 */

console.log('Tests'.blue)

Assert.equals({
    source: analyze('Romain'),
    expected: {
        lower: 5,
        upper: 1,
        letter: 6,
        number: 0,
        len: 6,
        spaces: 0,
        specials: 0
    }
})

Assert.equals({
    source: analyze('Romain + 33 OK$'),
    expected: {
        lower: 5,
        upper: 3,
        letter: 8,
        number: 2,
        len: 15,
        spaces: 3,
        specials: 5
    }
})