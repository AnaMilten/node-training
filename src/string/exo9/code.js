import 'colors'
import Assert from '../../lib/assert'
//import strlen from './correction'

console.log('String > exo8'.blue)
console.log('Créer une fonction qui retourne la longueur d\'une chaîne de caractères.'.green)
console.log(`@example
strlen('Romain') => 6
`)
console.log('')

/**
 * code
 * 
 * @todo
 * - Remove import of correction
 * - Write your own correction below to make the tests work
 */

const strlen = (string) => {
    /* let i = 0;
    string.split('').map((item) => item=i++)
    console.log(i);
    return i; */
    let char = 0    
    while (typeof string[char] !== 'undefined') {
    char += 1;
    } 
    console.log(char);
    return char;
}
/**
 * test
 */

console.log('Tests'.blue)
Assert.equals({
    source: strlen('Romain'),
    expected: 6
})

Assert.equals({
    source: strlen('T'),
    expected: 1
})

Assert.equals({
    source: strlen(''),
    expected: 0
})