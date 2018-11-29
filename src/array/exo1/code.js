import 'colors'
import Assert from '../../lib/assert'
//import { copyWithFor, copyWithForEach, copyWithMap } from './correction'

console.log('Array > exo1'.blue)
console.log('Copier un tableau'.green)
console.log(' > en utilisant une boucle for')
console.log(' > en utilisant un Array.prototype.forEach')
console.log(' > en utilisant un Array.prototype.map')
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
    source: copyWithFor(['12', 1, 'toto']),
    expected: ['12', 1, 'toto']
})

Assert.equals({
    source: copyWithForEach(['12', 1, 'toto']),
    expected: ['12', 1, 'toto']
})

Assert.equals({
    source: copyWithMap(['12', 1, 'toto']),
    expected: ['12', 1, 'toto']
})
