import 'colors'
import Assert from '../../lib/assert'
//import ucfirst from './correction'

console.log('String > exo8'.blue)
console.log('Créer une fonction qui passe le première caractère d\'une chaîne en majuscule'.green)
console.log(`@example
ucfirst('Romain') => Romain
ucfirst('romain') => Romain
ucfirst('roMain') => RoMain

@see
String.prototype.charAt
String.prototype.toUpperCase
String.prototype.slice
`)
console.log('')

/**
 * code
 * 
 * @todo
 * - Remove import of correction
 * - Write your own correction below to make the tests work
 */

const ucfirst = (string, number) => {
    let char = string.charAt(number).toUpperCase();
    console.log(char);
    let rest = string.slice(1, string.length);
    console.log(rest);
    return char + rest;
}
/**
 * test
 */

console.log('Tests'.blue)
Assert.equals({
    source: ucfirst('Romain'),
    expected: 'Romain'
})

Assert.equals({
    source: ucfirst('roMain'),
    expected: 'RoMain'
})

Assert.equals({
    source: ucfirst('romain'),
    expected: 'Romain'
})

Assert.equals({
    source: ucfirst('r'),
    expected: 'R'
})