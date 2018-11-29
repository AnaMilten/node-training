import 'colors'
import Assert from '../../lib/assert'
//import linkify from './correction'

console.log('String > exo7'.blue)
console.log('Créer une balise HTML "a" avec ses attributs'.green)
console.log('')

/**
 * code
 * 
 * @todo
 * - Remove import of correction
 * - Write your own correction below to make the tests work
 */

const linkify = (url, att) => {
    return `<a href="${url}">${att}</a>`
}
/**
 * test
 */

console.log('Tests'.blue)
Assert.equals({
    source: linkify('https://www.google.fr', 'Go to Google.com'),
    expected: '<a href="https://www.google.fr">Go to Google.com</a>'
})

Assert.equals({
    source: linkify('https://wildcodeschool.fr', 'Go to Wild Code School site'),
    expected: '<a href="https://wildcodeschool.fr">Go to Wild Code School site</a>'
})