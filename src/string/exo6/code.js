import 'colors'
import Assert from '../../lib/assert'
//import completeStringWithCharacters from './correction'

console.log('String > exo6'.blue)
console.log(`Compléter une chaîne de caractères jusqu'à une certaine longueur.
Utiliser un caractère de complément`.green)
console.log('')

/**
 * code
 * 
 * @todo
 * - Remove import of correction
 * - Write your own correction below to make the tests work
 */

const completeStringWithCharacters= (string, letter, number) => {
    return string.padEnd(number, letter);
}
/**
 * test
 */

console.log('Tests'.blue)
Assert.equals({
    source: completeStringWithCharacters('ma chaîne', 'a', 10),
    expected: 'ma chaînea'
})

Assert.equals({
    source: completeStringWithCharacters('ma chaîne', 'a', 20),
    expected: 'ma chaîneaaaaaaaaaaa'
})

Assert.equals({
    source: completeStringWithCharacters('rho', 'o', 10),
    expected: 'rhoooooooo'
})