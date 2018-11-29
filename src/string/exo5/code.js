import 'colors'
import Assert from '../../lib/assert'
/* import {
    concat3StringsVersion1,
    concat3StringsVersion2,
    concat3StringsVersion3
} from './correction' */

console.log('String > exo5'.blue)
console.log('Concatener 3 chaînes de caractères (de 3 façons différentes)'.green)
console.log('')

/**
 * code
 * 
 * @todo
 * - Remove import of correction
 * - Write your own correction below to make the tests work
 */

const concat3StringsVersion1 = (string1, string2, string3) => {
    return `${string1}${string2}${string3}`
}

const concat3StringsVersion2 = (string1, string2, string3) => {
    return (string1 + string2 + string3)
}

const concat3StringsVersion3 = (string1, string2, string3) => {
    return string1.concat(string2,string3);
}
/**
 * test
 */

console.log('Tests'.blue)
Assert.equals({
    source: concat3StringsVersion1('ma super ', 'chaîne de', ' caractères'),
    expected: 'ma super chaîne de caractères'
})

Assert.equals({
    source: concat3StringsVersion2('ma ', 'super ', 'chaîne de caractères'),
    expected: 'ma super chaîne de caractères'
})

Assert.equals({
    source: concat3StringsVersion3('ma ', 'super chaîne de', ' caractères'),
    expected: 'ma super chaîne de caractères'
})
