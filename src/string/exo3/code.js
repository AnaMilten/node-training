import 'colors'
import Assert from '../../lib/assert'
//import removeSpaces from './correction'

console.log('String > exo3'.blue)
console.log('Supprimer les espaces de début et de fin d\'une chaîne de caractères'.green)
console.log('')

/**
 * code
 * 
 * @todo
 * - Remove import of correction
 * - Write your own correction below to make the tests work
 */

const removeSpaces = (string) => {
    return string.trim();
}
/**
 * test
 */

console.log('Tests'.blue)
Assert.equals({
    source: removeSpaces('      ma super chaîne de caractères      '),
    expected: 'ma super chaîne de caractères'
})
