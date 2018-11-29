import 'colors'
import Assert from '../../lib/assert'
//import convertToUpperCase from './correction'

console.log('String > exo2'.blue)
console.log('Passer une chaîne de caractères en MAJUSCULE'.green)
console.log('')

/**
 * code
 * 
 * @todo
 * - Remove import of correction
 * - Write your own correction below to make the tests work
 */

const convertToUpperCase = (string) => {
    return string.toUpperCase()
};
/**
 * test
 */

console.log('Tests'.blue)
Assert.equals({
    source: convertToUpperCase('ma super Chaîne de Caractères'),
    expected: 'MA SUPER CHAÎNE DE CARACTÈRES'
})
