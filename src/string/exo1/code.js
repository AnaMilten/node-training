import 'colors'
import Assert from '../../lib/assert'
//import convertToLowerCase from './correction'

console.log('String > exo1'.blue)
console.log('Passer une chaîne de caractères en minuscule'.green)
console.log('')

/**
 * code
 * 
 * @todo
 * - Remove import of correction
 * - Write your own correction below to make the tests work
 */



const convertToLowerCase= (string) => {
    return string.toLowerCase()
};


convertToLowerCase('ma super Chaîne de Caractères')
/**
 * test
 */

console.log('Tests'.blue)
Assert.equals({
    source: convertToLowerCase('ma super Chaîne de Caractères'),
    expected: 'ma super chaîne de caractères'
})
