import 'colors'
import Assert from '../../lib/assert'
//import getSubStringPosition from './correction'

console.log('String > exo4'.blue)
console.log('Rechercher une sous-chaîne dans une chaîne de caractères et indiquer sa position'.green)
console.log('')

/**
 * code
 * 
 * @todo
 * - Remove import of correction
 * - Write your own correction below to make the tests work
 */
const getSubStringPosition = (string, a) => {
    return string.indexOf(a);
}

/**
 * test
 */

console.log('Tests'.blue)
Assert.equals({
    source: getSubStringPosition('ma super chaîne de caractères', 'ma'),
    expected: 0
})

Assert.equals({
    source: getSubStringPosition('ma super chaîne de caractères', 'super'),
    expected: 3
})

Assert.equals({
    source: getSubStringPosition('ma super chaîne de caractères', 'chaîne'),
    expected: 9
})

Assert.equals({
    source: getSubStringPosition('ma super chaîne de caractères', 'pourquoi'),
    expected: -1
})